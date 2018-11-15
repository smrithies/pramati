## SOLR

* Open-source search platform
* Built over lucene java search library
* Can used for searching and also for storage of large amounts of data.
* Tts a non-relational data storgae and data processing technology.
* Processing of text-centric data
* Default port number is 8983
* Use inverted index to search and providing results.
```
##### Inverted Index
Takes all documents, splits them into words and then build and index for each word which will be usually document id where that word has been refered(eg:- index in a book).  
```
> Users can search for information by passing queries into the Search Engine in the form of keywords or phrases. The Search Engine then searches in its database and returns relevant links to the user.

* Full-text searched application 
* Provide ranking based on keywords.
* Why SOLR prefered over RDBMS?  
  - RDBMS not able to provide data based on relevance(eg:- searched for a name and instead providing the columns having that name  
  providing other rows having that word somewhere).
  - Stemming problem(there will be a root word and a stem).
  - RDBMS uses simple wild card searches,searches every table.

#### Key features of solr
 * Advanced full-text search capabilities.
 * Near Real-time indexing.
 * Flexible and adaptable with easy configuration.
 * Easy monitoring.
 * Highly scalable and fault tolerant.
 * Hit highlighting.

#### Search Engine Components

* Generally, there are three basic components of a search engine as listed below −

  - Web Crawler − Web crawlers are also known as spiders or bots. It is a software component that traverses the web to gather information.

  - Database − All the information on the Web is stored in databases. They contain a huge volume of web resources.

  - Search Interfaces − This component is an interface between the user and the database. It helps the user to search through the database.

#### Installing solr
* Downloaded  solr-7.4.0.tgz file from (http://lucene.apache.org/solr)
* Installed solr using command tar zxf solr-7.4.0.tgz.

#### Running solr

* **bin/solr scripts in bin directory**

* To run in backward
```
bin/solr start
```
* In forward
```
bin/solr start -f 
```
* To view admin console
```
http://localhost:port_number 
```
* To start in different port
```
specify -p port_number at end
```
* To check status
```
bin/solr status
```
* To create a core or collection
```
bin/solr create -c core_name
```
* To delete a core
```
bin/solr delete -c core_name
```
* To index a document
```
bin/post -c core_name file_name
```
* To run solr using example document
```
bin/solr start -e example_name
```

#### Launch solr in cloud mode exercise
```
bin/solr start -e cloud
```
* launch a solr cloud cluster and without using -noprompt at the end it will ask for nodes and port.
* Two instances of nodes will start on two nodes.
* Solr launches its own ZooKeeper since we havent specify external and connects both nodes to it.
**zookeeper**
```
* Zookeeper helps you quickly push configuration changes.  
* Its primary purpose is cluster management.  
* Zookeeper relays important information about configuration changes across clusters.  
* Zookeeper can act as service locator for a node to find the database it has to work on.  
* Each process goes to zookeeper and if it finds a database has failed and selected a new primary database it will relays same information to other clusters that depends on that database.
* Zookeeper helps in coordination behaviour between clusters.
```
* Create a collection for indexing data that forms a cluster of two nodes.
* Ask for number of shards ie splitting the index accross the nodes( 2 default means equally distributing/evenly).
* Select a config file which will at minimum include a schema file and solrconfig.xml.
* **Index the documents via post command**
```
bin/solr post -c techproducts exaple/exampledocs/*
```
* **Basic searching**
  * via solr admin UI - includes a query builder interface in which a query tab.
  * via curl in command line : curl "http://localhost:8983/solr/techproducts/select?indent=on&q=*\:*"
  * Response contains a response header and result.
  * Respose header: Have the parameters set for the query.
  * fl param: to limit the fields in the response.(eg: particular category defined(q=cat:electronics) and in that only some fields need to be retrieved(id,name).
  * 

  * **Parameters**
   - **q**: query parameter -> to specify some direct words or phrases which will be searched in entire fields or can also specify the category. 
    ```
eg:-
 - q = electronics(in all fields)
 - q = cat:electronics(only in cat field)
 - q = "the schema"(support to search for phrases-"phrase"-> **phrase search**)
 - Phrase search using curl -> curl "http://localhost:8983/solr/techproducts/select?q=\"the**+**schema\""
    ```  
   - **fl**: field parameter -> to limit the fields in the response.(eg: particular category defined(q=cat:electronics - **field search**) and in that only some fields need to be retrieved(id,name). 
