export const calculatePrimesBelow =(limit: number): number[] => {
  console.log("Calculando os primos!");
  
  if (limit < 2) {
    return [];
  }

  const isPrime: boolean[] = Array(limit).fill(true); 

  isPrime[0] = isPrime[1] = false; 

  for (let i = 2; i * i < limit; i++) {
    if (isPrime[i]) {
      for (let multiple = i * i; multiple < limit; multiple += i) {
        isPrime[multiple] = false; 
      }
    }
  }

  return isPrime
    .map((prime, index) => (prime ? index : null))
    .filter((number): number is number => number !== null);
}
