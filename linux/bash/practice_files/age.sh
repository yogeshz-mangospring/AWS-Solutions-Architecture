#!/bin/bash

read -p "Enter your age: " age
if [[ $age -lt 18 ]]
then
	echo "You are minor!."
elif [[ $age -eq 18  ]]
then
	echo "Congratualtion you grew up"
else 
	echo "You are adult"
fi

