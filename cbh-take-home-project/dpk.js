const crypto = require("crypto");

const hashAlgo = "sha3-512"
const digestAlgo = "hex"

exports.deterministicPartitionKey = (event) => {
  let candidate

  candidate = getCandidateFromEvent(event);
  
  return generateValidCandidate(candidate);
};

function generateValidCandidate(candidate) {
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash(hashAlgo).update(candidate).digest(digestAlgo);
  }

  return candidate;
}

function getCandidateFromEvent(event) {
  const TRIVIAL_PARTITION_KEY = "0";
  let candidate = TRIVIAL_PARTITION_KEY;;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash(hashAlgo).update(data).digest(digestAlgo);
    }
  }

  return candidate;
}
