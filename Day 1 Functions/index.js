/*
 * Create the function factorial here
 */
function factorial(n) {
  let ans = 1;
  for (let i = 2; i <= n; i++)
    ans = ans * i;
  return ans;
}