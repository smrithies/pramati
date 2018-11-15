### SOLR

* Open-source search platform
* Built over lucene java search library
* Can used for searching and also for storage of large amounts of data.
* Tts a non-relational data storgae and data processing technology.
* Processing of text-centric data
* Default port number is 8983
* Use inverted index to search and providing results.
```
**Inverted Index**
Takes all documents, splits them into words and then build and index for each word which will be usually document id where that word has been refered(eg:- index in a book).  
```
Users can search for information by passing queries into the Search Engine in the form of keywords or phrases. The Search Engine then searches in its database and returns relevant links to the user.

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

**bin/solr scripts in bin directory**

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
