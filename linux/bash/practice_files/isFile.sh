#!/bin/bash

for files in ./*
do
	if [[ -f "$files" ]]
	then
		echo "file is $files"
	else
		echo "$files is Directory:"
	fi
done

