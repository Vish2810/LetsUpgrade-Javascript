function marksgrade()
{
grade = document.form1.text1.value;
switch (grade)
{
case 'A+':
console.log("Marks >= 90");
break;
case 'A':
console.log("Marks [ >= 80 and <90 ]");
break;
case 'B+':
console.log("Marks [ >= 70 and <80 ]");
break;
case 'B':
console.log("Marks [ >= 60 and <70 ]");
break;
case 'C':
console.log("Marks < 60");
break;
default:
console.log("Wrong grade.........");
}
}