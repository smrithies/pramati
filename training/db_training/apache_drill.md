## APACHE DRILL
* Apache Open source sql query engine- schema free.
* No need to define and maintain schemas or transform data (ETL). 
* Data processing models which process queries in distributed fashion.
* Deals with large amounts of data and provides interactive analysis of data.
* No need to maintain metadata and data separately.
* Automatically understand structure of data.

### To start drill in embedded mode
* Installing drill
  * Download apache-drill-1.14.0.tar.gz file.
```
tar -xvzf apache-drill-1.14.0.tar.gz
```
* Move to the installation directory.
* Run the following command.
```
bin/drill-embedded

or

bin/sqlline –u jdbc:drill:zk=local;schema=dfs  #using sqline command and specify default plugin configuration
```

* About the Drill Prompt
```
In embedded mode, the Drill prompt appears as follows:

0: jdbc:drill:zk=local>

0 is the number of connections to Drill, which can be only one in embedded node.
jdbc is the connection type.
zk=local zk=local means the local node substitutes for the ZooKeeper node.
```
* Exiting the drill shell
```
!quit
```
* Querying
* Querying example files in classfilepath that is already added while drill is installed.
  * Provide cp as 
* **Querying schema-less plain text file(CSV)**
  * Created a folder(Data) in home directory and a csv file inside the folder without any metadata(comma-separated values,no column names).
  * Entered into web console
  ```
  http://localhost:8047
  ```
  * In query section queries are executed.
  ```
  select * from dfs.root`/home/smrithies/Data/sample.csv`


	columns
	["10","Smrithi"]
	["20","Hari"]
	["30","Raveena"]
	["40","Athira"]
	["50","Alankar"]

  #display results as a single column with comma-separated values
  ```
  ```

  select columns[0], columns[1] from dfs.root.`/home/smrithies/Data/sample.csv`


	EXPR$0	EXPR$1
	10		Smrithi
	20		Hari
	30		Raveena
	40		Athira
	50		Alankar
  #splitting values separated by comma into columns.
  ```
  ```
  select columns[0] as Age, columns[1] as Name from dfs.root.`/home/smrithies/Data/sample.csv`


	Age Name
	10	Smrithi
	20	Hari
	30	Raveena
	40	Athira
	50	Alankar

  #able to split into columns and make alias for columns
  ```
