//input: float
//output: array where the elements are [quarter, dimes, nickels, pennies]

export const coinCounter = (money, result = {quarters:0, dimes:0, nickels:0, pennies:0}) => {
  //retrieve integer cents
  const cents = (money*100)%100;

  //base case
  if (cents === 0) {
    return result;
  } else if (cents >= 25) {
    return coinCounter(100*(cents-25), {quarters: result.quarters+1, dimes: result.dimes, nickels: result.nickels, pennies: result.pennies});
  } else if (cents >= 10) {
    return coinCounter(100*(cents-10), {quarters: result.quarters, dimes: result.dimes+1, nickels: result.nickels, pennies: result.pennies});
  } else if (cents >= 5) {
    return coinCounter(100*(cents-5), {quarters: result.quarters, dimes: result.dimes, nickels: result.nickels +1, pennies: result.pennies});
  } else {
    return coinCounter(100*(cents-1), {quarters: result.quarters, dimes: result.dimes, nickels: result.nickels, pennies: result.pennies +1});
  }
}