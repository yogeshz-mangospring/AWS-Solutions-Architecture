#!/bin/bash
if [ -f "$1" ]
then
	echo "The $1 is file, displaying its content....."
	sleep 1
	cat $1
elif [ -d "$1" ]
then
	echo "The $1 is directory, running ls -l...."
	sleep 1
	ls -l $1
else
	echo "The $1 is neither a file nor a directory."
fi

