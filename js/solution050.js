//Opposites Attract: Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

lovefunc=(flower1, flower2)=> (flower1%2==0 && flower2%2!=0 || flower1%2!=0 && flower2%2==0)
