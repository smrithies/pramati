# POSTGRES
* PostgreSQL is the first database management system that implements multi-version concurrency control (MVCC) feature  
* Enter into psql
```
sudo -u postgres psql; 
```
* Create a database
```
CREATE DATABASE database_name;
```
* List the databases
```
\l
```
* To connect/select desired database
```
\c database_name;

or

psql -h localhost -p 5432 -U postgress testdb; # from OS command prompt
```
* To exit from database
```
\q
```
* To drop a database
```
DROP DATABASE database_name;

dropdb database_name;
```
* To create a Schema
```
CREATE SCHEMA schema_name;
```
* To display tables in a database
``` SET FIELD
\d
```
* Create a table
```

```
* Update a value of a field
```
UPDATE table_name SET field_name = new_value, [field_name2 = new_value] WHERE condition; 
```
* Delete values or rows in a field
```
DELETE FROM table_name WHERE condition;

DELETE FROM table_name;
```
* **Like** operator
```
% - one or more characters
_ - one character

SELECT FROM table_name WHERE LIKE ''; # Display number of rows retrieved
```
* **LIMIT** AND **OFFSET**
```
LIMIT - no of rows
OFFSET - From where to start to retrieve

SELECT * FROM table_name LIMIT no OFFSET no
```
* ORDER BY DESC
```
SELECT * FROM table_name ORDER BY field_name DESC; 
```
* GROUP BY clause
  * After where and must obey the where condition and before order by.
  ```
  SELECT NAME FROM table_name WHERE GROUP BY fields,.. ORDER BY fields,...;
  ```
* WITH query
  * Often reffered to as CTE'S or Common Table Expressions - defining temporary tables for just one query.
  * Useful when subquery is executed multiple times.
  ```
  With CTE AS
  (Select
   ID
  , NAME
  , AGE
  , ADDRESS
  , SALARY
  FROM COMPANY )
  Select * From CTE;
  ```
  * Creating a new table and moving details of old table into new table
  ```
  CREATE TABLE COMPANY1(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);

WITH moved_rows AS (
   DELETE FROM COMPANY
   WHERE
      SALARY >= 30000
   RETURNING *
)
INSERT INTO COMPANY1 (SELECT * FROM moved_rows);
  ```
* HAVING clause
```
SELECT
FROM
WHERE
GROUP BY
HAVING
ORDER BY
```
  * Places conditions in groups created by GROUP BY clause
  ```
  SELECT NAME FROM COMPANY GROUP BY name HAVING count(name) < 2;
  ```
* Distinct keyword
  * To eliminate duplicate records.
  * Used in conjunction with select statement;
  ```
  select distinct column_name from table_name;
  ```
* Constraints
  * Rules enforced on data columns on table and ensures accuracy and reliability.
  * Two types:- 
    * Column level
    * Table level
* **Not Null** constraint
  * The specified columns cannot have null values.
  ```
  create table table_name (ID INT NOT NULL)
  ```
* **Unique** constraint
    ```
    create table table_name(column NOT NULL UNIQUE);
    ```
* **Foreign Key** constraint
    ```
    CREATE TABLE DEPARTMENT1(
   ID INT PRIMARY KEY      NOT NULL,
   DEPT           CHAR(50) NOT NULL,
   EMP_ID         INT      references COMPANY(ID)
);
    ```
* **Check** constraint
  * Can apply a check constraint to a column and if not satisfied not entered into table;
    ```
    CREATE TABLE COMPANY5(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL    CHECK(SALARY > 0)
);
    ```

* To display a table
```
\d table_name
```



#### String Functions and Operators
* Number of bits in string
```
bit_length(string)
```
* String concatenation
```
'string1'||'string2'
```
* Number of characters
```
select character_length('smrithi');
```




### Pattern matching
* **Like operator**
  * \_ -> one character
  * % -> zero or more characters
  * ILIKE -> match case-insensitive
  * ~~ -> LIKE
  * ~~\* -> NOTLIKE
* **SIMILAR TO**
  * Same as LIKE but nterprets the pattern using the SQL standard's definition of a regular expression.
  * | denotes alternation (either of two alternatives).

  * \* denotes repetition of the previous item zero or more times.

  *  \+ denotes repetition of the previous item one or more times.

  *  ? denotes repetition of the previous item zero or one time.

  *  {m} denotes repetition of the previous item exactly m times.

  *  {m,} denotes repetition of the previous item m or more times.

  *  {m,n} denotes repetition of the previous item at least m and not more than n times.

  *  Parentheses () can be used to group items into a single logical item.

  *  A bracket expression [...] specifies a character class, just as in POSIX regular expressions.
  ```
  'abc' SIMILAR TO 'abc'      true
  'abc' SIMILAR TO 'a'        false
  'abc' SIMILAR TO '%(b|d)%'  true
  'abc' SIMILAR TO '(b|c)%'   false
  ```
* **Posix regular expressions**
  * . means "any character".
  * \* means "any number of this".
  * .\* therefore means an arbitrary string of arbitrary length.
  * ^ indicates the beginning of the string.
  * $ indicates the end of the string.

