let n = prompt("Enter value of n to get prime numbers",0);
nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}