## POSTGRESQL

PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. 

### COMMANDS

- Default Admin Login:
 ```
  sudo -u postgres psql -U postgres;
 ```
 ```
  sudo -u postgres psql;
 ``` 
- Describe a table - 
```
  \d tablename
```
- Create new user:
```
  CREATE USER username WITH PASSWORD 'myPassword';
```  
 - Create a superuser user:
 ```
  CREATE USER username SUPERUSER WITH PASSWORD 'myPassword' ;
 ```
 - Grant privilages to user
 ```
  GRANT ALL PRIVILAGES ON DATABASE database_name TO user_name;
 ```  
 - Create table
 ```
  CREATE TABLE table_name(
  column1 datatype,
  column2 datatype,
  column3 datatype,
   .....
  columnN datatype,
  PRIMARY KEY( one or more columns )
);
 ```
 
 - To insert values
 ```
  INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)
  VALUES (value1, value2, value3,...valueN);
 ```
 ```
  INSERT INTO TABLE_NAME VALUES (value1,value2,value3,...valueN);
 ```

