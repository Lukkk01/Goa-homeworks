//https://www.hackerrank.com/challenges/cryptorank-exchange/problem?isFullScreen=true

function sortCrypto(arr) {
  return arr.sort((a, b) => b.marketCap - a.marketCap);
}