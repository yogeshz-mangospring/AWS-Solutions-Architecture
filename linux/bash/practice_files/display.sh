#!/bin/bash

if [[ $# -eq 1 ]]
then
	if [[ -f "$1" ]]
	then
		echo " The"
		sleep 1
		cat $1
	elif [[ -d "$1" ]]
	then
		echo "direc"
		sleep 1
		ls -l $1
	else
		echo "nither file or direct"
	fi
else
	echo "The script should be run with an argument."
fi

