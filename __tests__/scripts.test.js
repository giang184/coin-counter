import {coinCounter} from './../src/coinCounter.js'

describe('coinCounter', () => {
    test('should correct return zeros if value is whole dollar amount', () => {
      expect(coinCounter(5.00)).toEqual({quarters: 0, dimes:0, nickels:0, pennies:0});
    });

    test('should correct return 1 quarter if value is 4.25', () => {
      expect(coinCounter(4.25)).toEqual({quarters: 1, dimes:0, nickels:0, pennies:0});
    });

    test('should correct return 2 quarters if value is 5.50', () => {
      expect(coinCounter(5.50)).toEqual({quarters: 2, dimes:0, nickels:0, pennies:0});
    });

    test('should correct return 2 quarters, 1 dime, 1 nickel, 3 pennies if value is 34.68', () => {
      expect(coinCounter(34.68)).toEqual({quarters: 2, dimes:1, nickels:1, pennies:3});
    });
    
    test('should correct return 2 quarters, 1 dime, 1 nickel, 3 pennies if value is 34.68', () => {
      expect(coinCounter(1.10)).toEqual({quarters: 0, dimes:1, nickels:0, pennies:0});
    });
});