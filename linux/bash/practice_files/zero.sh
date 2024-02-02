#!/bin/bash

read -p  "Enter teh string" a

if [[ -z "$a" ]]
then
	echo "String is zero length"
else
	echo "string is not zero length"
fi

if [[ -n "$a" ]]
then
	echo "string is not zero length"
else 
	echo "string is zero length"
fi

