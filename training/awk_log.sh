awk '/INFO/$5 ~ /alert/ {print $1,",",$2,",",substr($5,4,7),",",substr($13,8,length($13)),",",substr($14,length($14)),",",substr($15,length($15)),",",substr($16,7,length($16))}' solr.log >> solr.csv
