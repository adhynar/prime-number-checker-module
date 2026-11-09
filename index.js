function isPrime(num) {
  if (typeof num !== 'number' || num <= 1) {
    return false;
  }

  // Cek apakah angka dapat dibagi oleh bilangan selain 1 dan dirinya sendiri
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isPrime: isPrime
};