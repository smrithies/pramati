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
#### Indexing
* **Index the documents via post command**
	```
	bin/solr post -c techproducts exaple/exampledocs/*
	```
  * To index our own data.
    ```
    bin/post -c core_name ~/Desktop or ~/Documents 

    bin/post -c core_name -filetypes doc,html,txt 
    ```
  * Delete data from a document by specifying its id.
    ```
    bin/post -c core_name -d "<delete><id>specify_id</id></delete>"
    ```

* **Basic searching**
  * via solr admin UI - includes a query builder interface in which a query tab.
  * via curl in command line : curl "http://localhost:8983/solr/techproducts/select?indent=on&q=*\:*"
	* Results are usually returned in xml format(can mold to other solr formats like JSON, php or ruby).
  * Response contains a response header and result.
  * Respose header: Have the parameters set for the query.
  

  * **Parameters**
    - **q**: query parameter -> to specify some direct words or phrases which will be searched in entire fields or can also specify the category. 
    - To search for a particular term or to specify the field to search for that term.
    ```
      q=foundation or q=name:foundation
			eg:-
			- q = electronics(in all fields)
			- q = cat:electronics(only in cat field)
			- q = "the schema"(support to search for phrases-"phrase"-> **phrase search**)
			- Phrase search using curl -> curl "http://localhost:8983/solr/techproducts/select?q=\"the**+**schema\""
    ```
    - **fl**: field parameter -> to limit the fields in the response.(eg: particular category defined(q=cat:electronics - **field search**) and in that only some fields need to be retrieved(id,name). 
    - **fq**: filter query -> to filter the query results using some specified values in a field.
    ```
    curl "http://localhost:8983/solr/techproducts/select?q=foundation&fl=id,name&facet=true&fq=cat:electronics"
    ```
    - Difference between q and fq parameters
      - Having q=*:* will give you all the documents and it won't calculate the relevance score as all documents qualifies, then doing fq=author:shakespeare will run the filter operation which is fast, and in case of q=author:shakespeare it need to calculate score of selected documents also which will be not be that fast.
* **Facet Browsing**
  * To narrow search results.
  ```
  curl "http://localhost:8983/solr/techproducts/select?q=foundation&fl=id,name&facet=true&facet.field=cat"
  #show an extra field facet_count which shows the count of documents that have the same category(cat).
  ```
  * Faceting allows the search results to be arranged into subsets and providing a count for each subset.
  * In response header one more field called facet_count shows the count of the specified field with the same value.
  * Shows how many query results have each possible value.

#### Schema, Documents
* Its a place where we tell solr how to build index from input documents.
* solr basic unit of information is a document which is a set of data that describes about something.(document about a person contain first and last name)
* Documents are composed of fields(eg:- first and last name could be a field.)
* Fields can contain different types of data which can be told by specifying the field type.
* Document input -> information retrieval from fields -> indexing.
* **Field analysis**
  * Its processing or digestion:- procees by which we ell solr how to process or change the information from the field(lower case or remove unnecessary words) while indexing.
* **Solr's schema file**
  * Managed schema:- solr uses by default and used to make schema changes at runtime via schema API or schemaless mode features - contents are still automatically updated by solr no manual edit possible.
  * schema.xml:-  file which can be edited manually and no edits via schemaAPI possible.
  * If in solr cloud mode schema visible only through schemaAPI or solr admin UI'S cloud screen.



#### Schemaless mode
  * When using managed-index-factory
  * With the default configuration shown above, you can use the Schema API to modify the schema as much as you want, and then later change the value of mutable to false if you wish to "lock" the schema in place and prevent future changes.


  * Classic schema.xml
  ```
   <schemaFactory class="ClassicIndexSchemaFactory"/>
   ```
    * Set update.autoCreateFields:false.
#### Swap space or swap memory
  *  A Swap Memory is a space in the Hard Disk of your computer that Operating Systems will use to put the information that is actually on the RAM to free it for another application. 

#### Using htop to monitor processes
  * It shows our usage per CPU, as well as a meaningful text graph of your memory and swap usage right at the top

#### Boosting
  * There are two stages where documents can be boosted: 
    * **At index time:-**
      * Static
    * **At query time:-**
      * Dynamic and so doesnot need reindexing.
      * Score is not actually assigned to document but to the subquery

#### Request Handlers
  * **/select** is a request handler that handles query requests.
  * **/update** is a request handler that handles index updates (i.e., sending new documents to the index)