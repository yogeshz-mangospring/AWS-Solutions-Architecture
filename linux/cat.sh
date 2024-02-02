#!/bin/bash

if [[ -n `cat /etc/passwd` ]]
then
	echo "AAA"
else
	echo "BBB"
fi
