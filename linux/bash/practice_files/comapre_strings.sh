#!/bin/bash
read -p "Enter the string 1: " str1
read -p "Enter the string 2: " str2
if [ "$str1" = "$str2"  ]
then
	echo "$str1 is equal to $str2 ."
else	
	echo "$str1 is not  equal to $str2 ."
fi

if [[ "$str1" == "$str2" ]]
then
	echo "$str1 is equal to $str2 ."
else
	echo "$str1 is not  equal to $str2 ."
fi

if [[ "$str1" != "$str2" ]];then
echo "The string are not equal!!!!!"
fi

