# Database Management Systems (DBMS) — PYQ Exam Analysis & Research

> **Course Code:** BTCOC501 | **Program:** Computer Science & Engineering (Sem V) | **University:** DBATU  
> **Source Question Bank:** `data/question-banks/dbms-pyq-database.json`  
> **Total Questions Analyzed:** 92 | **Total Units:** 5 | **Exam Papers Analyzed:** 11

---

## 1. Exam Papers Examined

The following 11 examination sessions were analyzed to identify recurring patterns, question frequencies, and unit weightages:

1. **Summer 2023 (Supplementary) – BTCOC501, CSE**
2. **Summer 2022 (Supplementary) – BTCOC501**
3. **Winter 2022 – BTCOC501**
4. **Summer 2023 – BTECPC402 (E&C, Sem IV)**
5. **Summer 2022 – BTAIC402 (AI&DS, Sem IV)**
6. **Summer 2023 – BTAIC402 (AI&DS, Sem IV)**
7. **Preliminary 2023-24 (SSWCOE) – BTCO501**
8. **Preliminary, SSWCOE (undated) – BTCOC501**
9. **Winter 2023 – BTCOC501**
10. **Winter 2019 – BTCOCS501 (CSE)**
11. **Winter 2019 – BTITC501 (IT)**

---

## 2. Topic Frequency & Exam Priority Analysis

Topics are categorized by historical frequency into:
- **🔥 Must Do (5+ appearances):** Foundational topics that recur across almost every exam cycle.
- **⚡ High Priority (3-4 appearances):** Highly probable topics with strong conceptual weight.
- **📌 Medium Priority (2 appearances):** Moderately repeated questions.
- **🔹 Standard (1 appearance):** Questions that appeared once in specialized or supplementary papers.

| # | Topic | Unit | Times Asked | Exam Priority |
|---|-------|------|-------------|---------------|
| 1 | SQL Query Writing — Multi-table Practice Schemas | Unit 3 | 8× | 🔥 Must Do |
| 2 | DBMS vs File Processing System | Unit 1 | 6× | 🔥 Must Do |
| 3 | Transactions — Concept, ACID Properties & States | Unit 4 | 6× | 🔥 Must Do |
| 4 | Need for Normalization & Anomalies | Unit 5 | 6× | 🔥 Must Do |
| 5 | 1NF / 2NF / 3NF | Unit 5 | 5× | 🔥 Must Do |
| 6 | DBMS Architecture & Components (Client/Server, Query Processor, Storage Manager) | Unit 1 | 4× | 🔥 Must Do |
| 7 | ER Diagram Construction (Case Studies) | Unit 1 | 4× | 🔥 Must Do |
| 8 | Fundamental / Unary & Binary Relational Algebra Operations | Unit 2 | 4× | 🔥 Must Do |
| 9 | Joins in Relational Algebra (Natural, Equi, Inner, Outer) | Unit 2 | 4× | 🔥 Must Do |
| 10 | SQL DDL/DML — Create, Alter, Drop, Insert, Update, Delete | Unit 3 | 4× | 🔥 Must Do |
| 11 | BCNF | Unit 5 | 4× | 🔥 Must Do |
| 12 | Functional Dependency Closure & Candidate Keys | Unit 5 | 4× | 🔥 Must Do |
| 13 | Purpose / Need of DBMS & Applications | Unit 1 | 3× | ⚡ Important |
| 14 | Data Abstraction / Levels of Abstraction | Unit 1 | 3× | ⚡ Important |
| 15 | Two-tier vs Three-tier Architecture | Unit 1 | 3× | ⚡ Important |
| 16 | Nested Subqueries | Unit 3 | 3× | ⚡ Important |
| 17 | ER Model — Concepts & Notation | Unit 1 | 2× | ⚡ Important |
| 18 | Entities, Attributes & Attribute Types | Unit 1 | 2× | ⚡ Important |
| 19 | RDBMS, Data Model & Schema/Instance | Unit 2 | 2× | ⚡ Important |
| 20 | Relational Algebra — Query Writing | Unit 2 | 2× | ⚡ Important |
| 21 | Tuple Relational Calculus (TRC) | Unit 3 | 2× | ⚡ Important |
| 22 | Domain Relational Calculus (DRC) | Unit 3 | 2× | ⚡ Important |
| 23 | DDL, DML, DCL Commands (Conceptual) | Unit 3 | 2× | ⚡ Important |
| 24 | Aggregate Functions & GROUP BY / HAVING | Unit 3 | 2× | ⚡ Important |
| 25 | Joins in SQL (Inner, Outer, Natural) | Unit 4 | 2× | ⚡ Important |
| 26 | Views | Unit 4 | 2× | ⚡ Important |

---

## 3. Unit-by-Unit Question Analysis

### Unit 1: Introduction & ER Model (08 Hrs)
*DBMS fundamentals, architecture, and Entity-Relationship modeling*

#### DBMS vs File Processing System 🔥 (Frequent Topic)
- **[Q5]** (⚡ 2×) Explain the different advantages of DBMS over file processing systems.  
  *Asked in: Preliminary 2023-24 (SSWCOE), Winter 2019 – IT (BTITC501)*
- **[Q1]** (1×) Illustrate the database characteristics. How are they different from File systems?  
  *Asked in: Summer 2023 (Supply)*
- **[Q2]** (1×) Why would you choose a database system instead of simply storing data in a file processing system? Compare file processing systems and DBMS.  
  *Asked in: Winter 2022*
- **[Q3]** (1×) What are the disadvantages of a file processing system?  
  *Asked in: Summer 2023 – AI&DS (BTAIC402)*
- **[Q4]** (1×) We develop database applications directly on top of file systems. But some problems arise because of this — discuss those problems.  
  *Asked in: Winter 2023*

#### Purpose / Need of DBMS & Applications 🔥 (Frequent Topic)
- **[Q6]** (⚡ 2×) What is DBMS? Explain the need of DBMS. Write any 3 applications of DBMS.  
  *Asked in: Summer 2022 – AI&DS (BTAIC402), Summer 2023 – AI&DS (BTAIC402)*
- **[Q7]** (1×) Explain the purpose of database systems.  
  *Asked in: Summer 2022 (Supply)*

#### Data Abstraction / Levels of Abstraction 🔥 (Frequent Topic)
- **[Q8]** (1×) Explain Data Abstraction.  
  *Asked in: Summer 2022 (Supply)*
- **[Q9]** (1×) Describe, with a diagram, the levels of abstraction available in database systems.  
  *Asked in: Summer 2023 – E&C (BTECPC402)*
- **[Q10]** (1×) Explain data abstraction and the different data models in DBMS.  
  *Asked in: Winter 2019 – IT (BTITC501)*

#### Data Storage and Querying 
- **[Q11]** (1×) Explain data storage and querying.  
  *Asked in: Summer 2022 (Supply)*

#### Two-tier vs Three-tier Architecture 🔥 (Frequent Topic)
- **[Q12]** (⚡ 2×) With the help of a diagram, explain the difference between 2-tier and 3-tier architecture. Justify which architecture is better suited for web applications.  
  *Asked in: Summer 2023 – E&C (BTECPC402), Winter 2019 – CSE (BTCOCS501)*
- **[Q13]** (1×) Explain two-tier and three-tier architectures of DBMS with a schematic diagram and mention at least 1 example of each.  
  *Asked in: Winter 2023*

#### DBMS Architecture & Components (Client/Server, Query Processor, Storage Manager) 🔥 (Frequent Topic)
- **[Q14]** (1×) Explain the Client/Server architecture of DBMS.  
  *Asked in: Summer 2022 – AI&DS (BTAIC402)*
- **[Q15]** (1×) Describe the components of: a) Query Processor b) Storage Processor.  
  *Asked in: Summer 2023 – E&C (BTECPC402)*
- **[Q16]** (1×) Define DBMS. List the components of DBMS.  
  *Asked in: Preliminary 2023-24 (SSWCOE)*
- **[Q17]** (1×) With the help of a block diagram, describe the basic architecture of a database management system.  
  *Asked in: Summer 2023 – AI&DS (BTAIC402)*

#### ER Model — Concepts & Notation 🔥 (Frequent Topic)
- **[Q18]** (1×) What is the ER model? Explain the various symbols/components used in an ER diagram.  
  *Asked in: Summer 2023 – AI&DS (BTAIC402)*
- **[Q19]** (1×) Explain the E-R Model with the help of an example.  
  *Asked in: Preliminary, SSWCOE (undated)*

#### Entities, Attributes & Attribute Types 🔥 (Frequent Topic)
- **[Q20]** (1×) Define an Entity and Attribute. Explain the different types of attributes that occur in an ER diagram model, with an example.  
  *Asked in: Winter 2022*
- **[Q21]** (1×) Define attributes. Explain the types of attributes with diagrams.  
  *Asked in: Preliminary, SSWCOE (undated)*

#### ER Diagram Construction (Case Studies) 🔥 (Frequent Topic)
- **[Q22]** (1×) Draw an E-R diagram of a Banking system taking into account at least five entities; indicate all keys, constraints, and assumptions made.  
  *Asked in: Winter 2022*
- **[Q23]** (1×) Draw the symbols of an ER Diagram. Draw an ER Diagram for a Library Management System.  
  *Asked in: Winter 2023*
- **[Q24]** (1×) A company has the following entities and attributes, where EmpPhone is a multivalued attribute and Address is a composite attribute (Employee, Contact Details, Department, Project). Draw the ER-Diagram for the same.  
  *Asked in: Summer 2023 – E&C (BTECPC402)*
- **[Q25]** (1×) Construct an E-R diagram for a car insurance company whose customers own one or more cars each, with recorded accidents, policies covering cars, and premium payments.  
  *Asked in: Winter 2019 – CSE (BTCOCS501)*

#### Codd's Rules 
- **[Q26]** (1×) Explain Codd's Rules.  
  *Asked in: Preliminary, SSWCOE (undated)*

---

### Unit 2: Relational Data Model & Relational Algebra (06 Hrs)
*Relational model structure, keys, and relational algebra operations*

#### Keys & Integrity Constraints 
- **[Q1]** (1×) Illustrate integrity and key constraints with suitable examples.  
  *Asked in: Summer 2023 (Supply)*

#### RDBMS, Data Model & Schema/Instance 🔥 (Frequent Topic)
- **[Q2]** (1×) What is RDBMS? Explain the data model of RDBMS. Define Schema and instances with a suitable example.  
  *Asked in: Summer 2022 – AI&DS (BTAIC402)*
- **[Q3]** (1×) Explain in detail the Data Model and its types.  
  *Asked in: Summer 2023 – AI&DS (BTAIC402)*

#### Fundamental / Unary & Binary Relational Algebra Operations 🔥 (Frequent Topic)
- **[Q6]** (⚡ 2×) Explain unary and binary operations in relational algebra.  
  *Asked in: Preliminary 2023-24 (SSWCOE), Winter 2019 – IT (BTITC501)*
- **[Q4]** (1×) What is Relational algebra? Explain the basic operations along with symbols of Relational Algebra.  
  *Asked in: Winter 2023*
- **[Q5]** (1×) List and explain, with the help of examples, the fundamental operations in relational algebra.  
  *Asked in: Preliminary 2023-24 (SSWCOE)*

#### Joins in Relational Algebra (Natural, Equi, Inner, Outer) 🔥 (Frequent Topic)
- **[Q7]** (1×) Define and differentiate the following relational algebra operators with a suitable example: (i) Cartesian product (ii) Natural join.  
  *Asked in: Winter 2022*
- **[Q8]** (1×) Explain the following with respect to relational algebra: Natural Join, Equi join, Left outer join, Full outer join.  
  *Asked in: Preliminary, SSWCOE (undated)*
- **[Q9]** (1×) Explain Inner Join & Outer Join in detail.  
  *Asked in: Preliminary 2023-24 (SSWCOE)*
- **[Q10]** (1×) Explain Equijoin, left join and right join with a suitable example, and write a proper relational algebra query for each.  
  *Asked in: Winter 2023*

#### Relational Algebra — Query Writing 🔥 (Frequent Topic)
- **[Q11]** (1×) Given schema Suppliers(sid,sname,address), Parts(pid,pname,color), Catalog(sid,pid,cost) — write relational algebra queries to find suppliers who supply red parts, and suppliers who supply red or green parts.  
  *Asked in: Winter 2022*
- **[Q12]** (1×) Given a relational schema Account(Acno, AcName, Br_name, Amount), write relational algebra queries to display all tuples, project specific columns, and filter by amount and branch.  
  *Asked in: Winter 2023*

---

### Unit 3: Relational Calculus & SQL (08 Hrs)
*Tuple/domain relational calculus and SQL fundamentals*

#### Tuple Relational Calculus (TRC) 🔥 (Frequent Topic)
- **[Q1]** (1×) Given relation schemas R=(A,B,C), S=(D,E,F), give an expression in tuple relational calculus equivalent to the given queries.  
  *Asked in: Preliminary 2023-24 (SSWCOE)*
- **[Q2]** (1×) Given an employee/works/company/manages database, give expressions in tuple relational calculus for the given queries.  
  *Asked in: Winter 2022*

#### Domain Relational Calculus (DRC) 🔥 (Frequent Topic)
- **[Q3]** (1×) Explain domain relational calculus with the help of an example.  
  *Asked in: Preliminary 2023-24 (SSWCOE)*
- **[Q4]** (1×) Explain domain relational calculus.  
  *Asked in: Summer 2022 (Supply)*

#### SQL Equivalent of Algebra/Calculus Expressions 
- **[Q5]** (1×) Given relation schemas R=(A,B,C), S=(A,D,E), give an SQL expression equivalent to given relational algebra queries (Π, σ, ×, ⋈, ∩).  
  *Asked in: Winter 2019 – CSE (BTCOCS501)*

#### Basic SQL Query Structure 
- **[Q6]** (1×) Explain, in detail, the form of a basic SQL query with a suitable example.  
  *Asked in: Summer 2023 (Supply)*

#### SQL DDL/DML — Create, Alter, Drop, Insert, Update, Delete 🔥 (Frequent Topic)
- **[Q7]** (1×) Write SQL commands to: create a Student table for a given schema, add a new column, and drop a column.  
  *Asked in: Summer 2023 – E&C (BTECPC402)*
- **[Q8]** (1×) Write SQL statements to insert a new student record, change the credit_hours of a course, and delete a student record.  
  *Asked in: Winter 2019 – CSE (BTCOCS501)*
- **[Q9]** (1×) Write SQL commands to create/use/show/delete databases, create a BOOK table, insert rows, alter column length, and query rows by condition.  
  *Asked in: Winter 2023*
- **[Q10]** (1×) Given Student/Teacher/Teaches schemas, write SQL queries to update a department name and rename a column, alongside filtering and aggregation queries.  
  *Asked in: Summer 2022 – AI&DS (BTAIC402)*

#### DDL, DML, DCL Commands (Conceptual) 🔥 (Frequent Topic)
- **[Q11]** (1×) Explain DDL, DML and DCL commands with suitable examples.  
  *Asked in: Winter 2019 – IT (BTITC501)*
- **[Q12]** (1×) Mention the different SQL languages. Explain their purpose with suitable SQL commands.  
  *Asked in: Winter 2023*

#### SET / Comparison Operators in SQL 
- **[Q13]** (1×) List out various SET comparison operators in SQL and describe their use in writing SQL queries.  
  *Asked in: Summer 2023 (Supply)*

#### Aggregate Functions & GROUP BY / HAVING 🔥 (Frequent Topic)
- **[Q14]** (1×) Explain different aggregate functions in SQL with suitable examples.  
  *Asked in: Winter 2019 – IT (BTITC501)*
- **[Q15]** (1×) Explain the GROUP BY and HAVING clauses of SQL with an example.  
  *Asked in: Preliminary 2023-24 (SSWCOE)*

#### Nested Subqueries 🔥 (Frequent Topic)
- **[Q17]** (⚡ 2×) Given Salesman/Customer/Orders schemas, write a subquery to find the customer who placed the 2nd-highest amount order.  
  *Asked in: Preliminary 2023-24 (SSWCOE), Winter 2019 – IT (BTITC501)*
- **[Q16]** (1×) Given an EMPLOYEE table (Eid, Name, Age, Address, Salary), use subqueries to display high earners, delete young employees, and find the second-highest salary.  
  *Asked in: Summer 2023 – E&C (BTECPC402)*

#### SQL Query Writing — Multi-table Practice Schemas 🔥 (Frequent Topic)
- **[Q20]** (⚡ 2×) Given Salesman/Customer/Orders schemas, write SQL queries for customer names per order, city-wise counts, and comparative order amounts.  
  *Asked in: Preliminary 2023-24 (SSWCOE), Winter 2019 – IT (BTITC501)*
- **[Q18]** (1×) Given bank schema (account, branch, customer, loan, depositor, borrower), write SQL queries for customer/loan lookups, string filtering, and ordered listings.  
  *Asked in: Summer 2023 (Supply)*
- **[Q19]** (1×) Given EMPLOYEE/DEPARTMENT/PROJECT/WORKS_ON/DEPENDENT schema, write SQL queries to retrieve employee/department details for a given department.  
  *Asked in: Summer 2023 (Supply)*
- **[Q21]** (1×) Given Suppliers/Parts/Catalog schema, write SQL queries to create the tables and find suppliers matching part-color/location conditions.  
  *Asked in: Winter 2023*
- **[Q22]** (1×) Given Weather(city, temperature, humidity, condition) and Location(city, country) schemas, write SQL queries with comparison and range conditions.  
  *Asked in: Winter 2022*
- **[Q23]** (1×) Given Instructor/Teaches/Course/Department schema, write SQL queries to find courses taught across semesters and instructors within a salary range.  
  *Asked in: Summer 2022 (Supply)*
- **[Q24]** (1×) Given branch/customer/account/loan/depositor/borrower schema, write relational-algebra-to-SQL queries for loan amounts and customers with loans/accounts.  
  *Asked in: Winter 2019 – IT (BTITC501)*

---

### Unit 4: Intermediate & Advanced SQL (06 Hrs)
*Joins, views, transactions, functions, procedures and triggers*

#### Joins in SQL (Inner, Outer, Natural) 🔥 (Frequent Topic)
- **[Q1]** (1×) Explain Inner, Left Outer and Right Outer Joins with a suitable example.  
  *Asked in: Summer 2023 – E&C (BTECPC402)*
- **[Q2]** (1×) Explain the following types of joins in SQL with a suitable example: Inner Join, Left Outer Join, Natural Join.  
  *Asked in: Summer 2022 – AI&DS (BTAIC402)*

#### Views 🔥 (Frequent Topic)
- **[Q3]** (1×) What is a view? What are its advantages? Explain views in SQL with a suitable example.  
  *Asked in: Winter 2022*
- **[Q4]** (1×) What is a view? How do you create and delete a view?  
  *Asked in: Preliminary 2023-24 (SSWCOE)*

#### Functions and Procedures 
- **[Q5]** (1×) Explain Functions and Procedures with an example.  
  *Asked in: Summer 2022 (Supply)*

#### Transactions — Concept, ACID Properties & States 🔥 (Frequent Topic)
- **[Q6]** (1×) Define Transaction and its properties with a suitable example.  
  *Asked in: Winter 2023*
- **[Q7]** (1×) Explain the ACID properties of a transaction using suitable examples.  
  *Asked in: Winter 2019 – IT (BTITC501)*
- **[Q8]** (1×) Explain the ACID properties in detail.  
  *Asked in: Winter 2022*
- **[Q9]** (1×) Explain the ACID properties of a transaction.  
  *Asked in: Summer 2023 (Supply)*
- **[Q10]** (1×) Draw a state diagram and discuss the typical states a transaction goes through during execution.  
  *Asked in: Summer 2023 – E&C (BTECPC402)*
- **[Q11]** (1×) Explain the transaction process state diagram.  
  *Asked in: Preliminary 2023-24 (SSWCOE)*

---

### Unit 5: Normalization (null)
*Functional dependencies and normal forms (1NF–4NF)*

#### Need for Normalization & Anomalies 🔥 (Frequent Topic)
- **[Q1]** (1×) What is Normalization? Explain the importance of normalization. What is the criteria for good relation design?  
  *Asked in: Winter 2022*
- **[Q2]** (1×) What is normalization? Why does one need to normalize database tables?  
  *Asked in: Winter 2023*
- **[Q3]** (1×) What is Normalization? Explain various anomalies with a suitable example.  
  *Asked in: Summer 2023 – E&C (BTECPC402)*
- **[Q4]** (1×) What is the need of Normalization? Write the necessary conditions for 1NF, 2NF, 3NF and BCNF.  
  *Asked in: Summer 2022 – AI&DS (BTAIC402)*
- **[Q5]** (1×) Explain insertion, deletion and modification anomalies with suitable examples.  
  *Asked in: Summer 2022 (Supply)*
- **[Q6]** (1×) What is Redundancy? Explain the anomalies in a relational database.  
  *Asked in: Preliminary, SSWCOE (undated)*

#### 1NF / 2NF / 3NF 🔥 (Frequent Topic)
- **[Q7]** (1×) Define Normalization. Explain 1NF, 2NF, 3NF with an example.  
  *Asked in: Summer 2023 – AI&DS (BTAIC402)*
- **[Q8]** (1×) Explain the 1st, 2nd and 3rd normal forms with the help of a suitable example.  
  *Asked in: Winter 2023*
- **[Q9]** (1×) Write a short note on: (i) 1NF (ii) BCNF (iii) 4NF.  
  *Asked in: Preliminary 2023-24 (SSWCOE)*
- **[Q10]** (1×) Illustrating the concept of full functional dependency, explain 2NF with an example.  
  *Asked in: Winter 2019 – CSE (BTCOCS501)*
- **[Q11]** (1×) Identify whether a given relation R(A,B,C,D) with a given set of functional dependencies is in 2NF or not.  
  *Asked in: Summer 2023 – E&C (BTECPC402)*

#### BCNF 🔥 (Frequent Topic)
- **[Q12]** (1×) State BCNF. How does it differ from 3NF?  
  *Asked in: Summer 2023 (Supply)*
- **[Q13]** (1×) Explain BCNF with a suitable example and distinguish between BCNF and 3NF; check if a given relation R(student_no, course_no, instr_no) with a given FD set is in BCNF and 3NF.  
  *Asked in: Winter 2022*
- **[Q14]** (1×) Explain BCNF.  
  *Asked in: Summer 2022 (Supply)*
- **[Q15]** (1×) Given a relation R(A,B,C,D) with primary key AB and various candidate functional dependencies (D→C, C→D, AC→D, etc.), determine which normal form R is in.  
  *Asked in: Preliminary, SSWCOE (undated)*

#### Functional Dependency Closure & Candidate Keys 🔥 (Frequent Topic)
- **[Q16]** (1×) Compute the closure of a given set of functional dependencies F for a relation schema.  
  *Asked in: Winter 2019 – CSE (BTCOCS501)*
- **[Q17]** (1×) Given R(A,B,C,G,H,I) with functional dependencies A→B, A→C, CG→H, CG→I, B→H, compute (AG)+ and determine if it is a candidate key.  
  *Asked in: Winter 2022*
- **[Q18]** (1×) List the candidate keys for R(A,B,C,D,E) given FDs A→BC, CD→E, B→D, E→A.  
  *Asked in: Winter 2019 – CSE (BTCOCS501)*
- **[Q19]** (1×) Find the primary and non-primary attributes of R(A,B,C,D,E) given a set of functional dependencies.  
  *Asked in: Summer 2023 – E&C (BTECPC402)*

---

## 4. Key Academic Takeaways for Students

1. **SQL Schema Writing Dominance:** SQL query formulation across multi-table schemas appeared 8 times in 11 exam papers, making it the highest yield topic in the entire syllabus.
2. **Transaction Management Core:** ACID properties, state transition diagrams, and serializability appear consistently across both regular and supplementary examinations.
3. **Relational Database Design:** Normalization (1NF, 2NF, 3NF, BCNF) and Functional Dependency closure algorithms are consistently examined with numerical or proof-based problems.
4. **Relational Algebra vs Calculus:** Tuple and Domain relational calculus are frequently tested in comparative or descriptive formats alongside basic algebraic operators.

---
*Maintained as part of the [CSE-Sem5-PrepHub](https://github.com/Roshan-Bhadane/CSE-Sem5-PrepHub) academic preparation repository.*
