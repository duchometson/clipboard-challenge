# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## 1. Add Agent Custom ID to Internal Databases

### 1.1 What to do

This ticket consists in updating internal databases in order to create custom agents id column without breaking the original application flow, since this task must be a new feature and not a new flow to the report generation process.

### 1.2 How to

New column must be created in each table that references agent. Agent table must receive the new column `agent_custom_id` as UNIQUE and NULLABLE, because it should be a opitional feature and old data must be persisted. Shift must also receive a new column, that being a foreign key that refereces the assinged agent .

### 1.3 Acceptance Criteria

- old flow must be unbroken
- agent custom id must be unique, but also nullabe

### 1.4 Estimation

- Time: 2 hrs

## 2. Update Agents Application Structure for Agent Custom ID Mapping

### 2.1 What to do

This ticket consists in updating database metadata with the new added id column for retrieving agents information when database is accessed.

### 2.2 How to

As soon as the new column was created, all modified tables must received a new property for mapping the added column. This ticket must also add new testing cenarios for validating unique and nullable databases constraints.

### 2.3 Acceptance Criteria

- passing tests
- new cenarios coverage

### 2.4 Estimation

- Time: 2 hrs

## 3. Add Agents Custom Id to Report Generation

### 3.1 What to do

At this point, internal databases and application structures are ready for adding new information to the flow. Then, in this ticket you must add the new agent custom id to the report genaration.

### 3.2 How to

Add new agent custom id property to report generated PDF. The new field is opitional, then it may be empty is doesn't exists. New unit tests must be added for validating new field logic.

### 3.3 Acceptance Criteria

- new cenarios coverage

### 3.4 Estimation

- Time: 2 hrs

## 4. Update Agents Creation in Database for new agent custom field

### 4.1 What to do

Add new agent custom id field to new agents creation flow. Facilities should be able to add agent custom id for new agent when creating a new user.

### 4.2 How to

Modify existing agent creation flow to make possible the inclusion of agent_custom_id field in the database.

### 4.3 Acceptance Criteria

- new cenarios coverage
- unique and nullble constraints must be respected

### 4.4 Estimation

- Time: 3 hrs

## 5. Agents Update in Database for new agent custom field

### 5.1 What to do

Add new agent custom id field to existing agents update flow. Facilities should be able to update existing agents with the agent custom id field.

### 5.2 How to

Modify existing agent update flow to make possible the inclusion of agent_custom_id field in the database.

### 5.3 Acceptance Criteria

- new cenarios coverage
- unique and nullble constraints must be respected

### 5.4 Estimation

- Time: 3 hrs
