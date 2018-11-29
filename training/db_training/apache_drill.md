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