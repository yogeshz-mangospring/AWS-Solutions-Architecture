#!/bin/bash

a="ls -l /etc/passwd"
b=`ls -l /etc/passwd`
c=$(ls -l /etc/passwd)
echo $a
echo $b
echo $c
