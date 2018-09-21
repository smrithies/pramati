## SET - 4


**1. Load the csv to table using psql command**

```
psql -h 172.17.10.109 -U python_app -d training -c "\copy employee (emp_id,name,dept_id,mgr_id,salary,joining_date,termination_date) FROM 'Downloads/sql4.csv' with (format csv,header true, delimiter ',');"

```
**2. While loading the table, if the given mgr_id is not in emp table, insert/update should fail**

```
ALTER TABLE employee
ADD CONSTRAINT FK_employee_Code FOREIGN KEY (mgr_id)
REFERENCES employee (emp_id) ;
```
```
ALTER TABLE employee
ADD CONSTRAINT FK_dept_code FOREIGN KEY (dept_id)
REFERENCES dept (dept_id) ;
```

**3. create a new employee table (say employee1) with the same structure and constraints of employee table but not data**

``` 
CREATE TABLE employee1
AS
 SELECT * FROM employee
 WHERE 1=0;
```

**4. add a new column peer_emp_ids array**

```
ALTER TABLE employee1 ADD COLUMN peer_emp_ids int[];
```

**5. write an insert statement to populate this table from employee table where peer_emp_ids is the employee ids of its manager excluding the given employee**

```
INSERT into employee1
SELECT*,(
	SELECT ARRAY_AGG (emp_id)
	FROM employee e_inr
	WHERE e_inr.mgr_id = e.mgr_id
	) - ARRAY [ e.emp_id ]
FROM employee e

```
**6. Write a SQL to find all the employees for the given employee id where the given employee is part of using peer_emp_ids**
```
SELECT *
FROM employee e
INNER JOIN employee1 e1 
ON e.emp_id = ANY (e1.peer_emp_ids)
WHERE e1.emp_id = 3
``` 


