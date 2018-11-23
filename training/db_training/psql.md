# POSTGRES
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
```
* To display tables in a database
```
\d
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

