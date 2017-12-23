// https://www.codewars.com/kata/sum-of-odd-numbers/solutions/javascript

function solution1(n) {
  return Math.pow(n, 3)
}

function solution(n) {
	if(n===1) return 1
  let x=1
  for(let i=2; i<=n-1; i++)
    for(let j=1; j<=i; j++)
      x+=2
  let sum=0
  for(let i=1; i<=n; i++){
    x+=2
    sum+=x
  }
  return sum
}

module.exports = solution
