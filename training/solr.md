# SOLR
* Open source web aplication built over lucene search libraries but have some extended features.
* SOLR is used for developing,high performance search applications.
* Can used in large data analysis, and can retrieve accurate results.
* Use inverted index to search and providing results.
##### Inverted Index
> Takes all documents, splits them into words and then build and index for each word which will be usually document id where that word has been refered.  

* Full-text searched application 
* Provide ranking based on keywords.
* Why SOLR prefered over RDBMS?  
    - RDBMS not able to provide data based on relevance(eg:- searched for a name and instead providing the columns having that name  
  providing other rows having that word somewhere).
    - Stemming problem(there will be a root word and a stem).
    - RDBMS uses simple wild card searches,searches every table.
##### Key features
 * Advanced full-text search capabilities.
 * Near Real-time indexing.
 * Flexible and adaptable with easy configuration.
 * Easy monitoring.
 * Highly scalable and fault tolerant.
 * Hit highlighting.
##### Installed SOLR
* Steps followed
           1. Downloaded  solr-7.4.0.tgz file from (http://lucene.apache.org/solr)
           2. Installed solr using command tar zxf solr-7.4.0.tgz.
* Running solr
   - Start command:- bin/solr start(backgorund) or bin/solr start -f(foregorund) or bin solr  start -p port_no(another port)
   - Start help commands:- bin/solr start -help
   - stop command:- bin/solr stop -all(deleting all created nodes) or bin/solr stop -p port_no(one specific node)
   - Status command:- bin/solr status(checking whether solr is running, give current instances, and memmory usage etc.).
   - To view admin console:- (http://localhost:port_no/solr) 
