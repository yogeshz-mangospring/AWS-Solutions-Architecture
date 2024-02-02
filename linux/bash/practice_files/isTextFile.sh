#!/bin/bash

for textFile in ./*.txt
do
	if [[ -f "$textFile" ]];then
	echo "$textFile is text file"
	fi
done
