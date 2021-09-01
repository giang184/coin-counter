export const romanNumeralsClosures = (nums) => {
  return () => {
    let thousands ='';
    if (nums >= 3000) {
      thousands = 'MMM';
    } else if (nums >= 2000) {
      thousands = 'MM';
    } else if (nums >=1000) {
      thousands = 'M';
    } else {
      thousands = '';
    }
    const num1 = nums%1000;

    return () => {
      if (num1 >= 900) {
        const hundreds = 'CM';
      } else if (num1 >= 800) {
        const hundreds = 'DCCC';
      } else if (num1 >= 700) {
        const hundreds = 'DCC';
      } else if (num1 >= 600) {
        const hundreds = 'DC';
      } else if (num1 >= 500) {
        const hundreds = 'D';
      } else if (num1 >= 400) {
        const hundreds = 'CD';
      } else if (num1 >= 300) {
        const hundreds = 'CCC';
      } else if (num1 >= 200) {
        const hundreds = 'CC';
      } else if (num1 >= 100) {
        const hundreds = 'C';
      } else {
        const hundreds = '';
      }
      const num2 = num1%100;

      return () => {
        if (num2 >= 90) {
          const tens = 'XC';
        } else if (num2 >= 80) {
          const tens = 'LXXX';
        } else if (num2 >= 70) {
          const tens = 'LXX';
        } else if (num2 >= 60) {
          const tens = 'LX';
        } else if (num2 >= 50) {
          const tens = 'L';
        } else if (num2 >= 40) {
          const tens = 'XL';
        } else if (num2 >= 30) {
          const tens = 'XXX';
        } else if (num2 >= 20) {
          const tens = 'XX';
        } else if (num2 >= 10) {
          const tens = 'X';
        } else {
          const tens = '';
        }
        const num3 = num2%100;

        return () => {
          if (num3 >= 9) {
            const ones = 'IX';
          } else if (num3 >= 8) {
            const ones = 'VIII';
          } else if (num3 >= 7) {
            const ones = 'VII';
          } else if (num3 >= 6) {
            const ones = 'VI';
          } else if (num3 >= 5) {
            const ones = 'V';
          } else if (num3 >= 4) {
            const ones = 'IV';
          } else if (num3 >= 3) {
            const ones = 'III';
          } else if (num3 >= 2) {
            const ones = 'II';
          } else if (num3 >= 1) {
            const ones = 'I';
          } else {
            const ones = '';
          }
          return `${thousands}${hundreds}${tens}${ones}`;
          }
      }
    }
  }
}