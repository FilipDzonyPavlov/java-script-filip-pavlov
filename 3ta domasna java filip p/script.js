let year = prompt("Vnesi godini za da go doznaes tvojot kineski horoskop:");
year = parseInt(year);
let zodiacAnimals = ['dragon', 'rabbit', 'ox', 'tiger', 'horsse', 'snake', 'monkey', 'goat', 'rooster', 'pig', 'dog'];
let zodiac = zodiacAnimals[(year - 4) % 12];
alert("The Chinese Zodiac for the year " + year + " is: " + zodiac);