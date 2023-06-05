const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the entered partitionKey when event inputed wasn't not empty", () => {
    const PARTITION_KEY = "1"
    let event;
    event.partitionKey = PARTITION_KEY
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(PARTITION_KEY);
  });

  it("Returns the event.partitionKey when event inputed wasn't not empty", () => {
    const PARTITION_KEY = "1"
    let event;
    event.partitionKey = PARTITION_KEY
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(PARTITION_KEY);
  });

  it("Returns the candidate as event when event inputed without partitionKey", () => {
    let event;
    event.data = "2"
    
    const trivialKey = deterministicPartitionKey(event);
    
    const data = JSON.stringify(event);
    candidate = crypto.createHash(hashAlgo).update(data).digest(digestAlgo);

    expect(trivialKey).toBe(candidate);
  });
});
