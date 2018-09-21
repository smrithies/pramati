## SQL queries
1. Employee_Name and Manager_Name
 - SELECT b.name AS "Emp_Name",a.name AS "Mgr_Name" FROM employee a, employee b WHERE a.emp_id = b.mgr_id;
2. Employee name, emp doj, manager name, manger doj
 - SELECT a.name AS "Emp_Name",a.joining_date AS "DOJ",b.name AS "Mgr_Name",b.joining_date AS "DOJ" FROM employee a, employee b WHERE a.mgr_id = b.emp_id;
3. Employee name, Emp Dept, Mgr Dept
 - SELECT a.name Emp_Name,ad.name Employee_dept ,bd.name Manager_dept FROM employee a, employee b ,dept ad,dept bd WHERE b.emp_id = a.mgr_id and a.dept_id=ad.dept_id and b.dept_id=bd.dept_id;
4. List of employees without a manager
 - select name from employee WHERE mgr_id IS NULL;
5. List of terminated manager names
 - select distinct b.name AS manager_names from employee a,employee b where a.mgr_id=b.emp_id and b.termination_date IS NOT NULL;
6. List of department names where we have a terminated employee
 - select distinct d.name as dept_name from employee a,dept d where a.termination_date is not null and a.dept_id = d.dept_id;
7. List of department names where we have a terminated Manager
 - select distinct bd.name Dept_name from employee a,employee b,dept ad,dept bd  where a.mgr_id=b.emp_id and b.termination_date<now()::date and ad.dept_id=a.dept_id and bd.dept_id=b.dept_id;
8. List of employees whose manager's salary is less then employee salary
 - SELECT a.name AS "Emp_Name" FROM employee a, employee b WHERE b.emp_id = a.mgr_id and b.salary<a.salary;
9. List of employees whose doj is earlier than manager
 - SELECT a.name AS "Emp_Name" FROM employee a, employee b WHERE b.emp_id = a.mgr_id and a.joining_date<b.joining_date;
10. List of employees whose name has a vowel
 - SELECT name FROM employee WHERE name LIKE '%A%' OR name LIKE '%E%' OR name LIKE '%I%' OR name LIKE '%O%' OR name LIKE '%U%' OR name LIKE '%a%' OR name LIKE '%e%' OR name LIKE '%i%' OR name LIKE '%o%' OR name LIKE '%u%'
11. List of employees whose's manager name has a vowel and employee salary is less than 20000
 - SELECT b.name AS "Emp_Name" FROM employee a, employee b WHERE a.emp_id = b.mgr_id and b.salary < 20000 and (a.name LIKE '%A%' OR a.name LIKE '%E%' OR a.name LIKE '%I%' OR a.name LIKE '%O%' OR a.name LIKE '%U%' OR a.name LIKE '%a%' OR a.name LIKE '%e%' OR a.name LIKE '%i%' OR a.name LIKE '%o%' OR a.name LIKE '%u%');
12. List of employees who has joined in Jan/Feb and Nov
 - select name from employee WHERE to_char(joining_date, 'mm') = '02' OR to_char(joining_date, 'mm') = '01' OR to_char(joining_date, 'mm') = '11';


