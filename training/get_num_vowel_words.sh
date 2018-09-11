#!/bin/sh
filename="test.txt"
cou=$(cat $filename)
count=0;
for i in $cou
do
	if [[ $i == *[AEIOUaeiou]* ]]
	then
		count=$((count+1));
	fi
done
echo $count
