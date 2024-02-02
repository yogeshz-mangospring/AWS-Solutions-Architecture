#!/bin/bash

echo -n "Enter your faviourite Pet: "
read PET

case "$PET" in
	dog)
		echo "Your Faviourite Pet is the DOG."
		;;
	cat|Cat)
		echo "Your fav pet is Cat."
		;;
	fish|"American Turtel")
		echo "Your fav fis or turtles are great!!!."
		;;
	*)
		echo "Your fav pet is unknown"
esac
