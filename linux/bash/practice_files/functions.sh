#!/bin/bash

function print_name () {
	echo "Print Function."
}

dipslay_name () {
	echo "Display name Functions."
}

create_file () {
	echo "Creating $1"
	touch $1
	chmod 400 $1
	echo "Creating $2"
	touch	$2
	chmod 600 $2
}

lines_in_file () {
	grep -c "$1" "$2"
}

x="AA"
b="BB"

vairables_test(){
	echo "VAR is $x , var is $b"
}

var_test2(){
	x="new XX"
	local b="few"
	echo "VAR is $x , var is $b"
}

print_name
dipslay_name
create_file aa.txt bb.txt
n=$(lines_in_file "usb" "/var/log/dmesg")
echo $n
echo "###################"
vairables_test
var_test2
echo "After calling var_test2() value of x is $x and b is $b"
