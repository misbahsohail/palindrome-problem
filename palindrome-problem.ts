const exampleString = "aabbaabb".split("");
//const exampleString = 'abbaaab'.split('')
//const exampleString = 'levelel'.split('')
//const exampleString = 'aaa'.split('')

const TEMP_CHAR = "tempChar";



// the total complexity of this function would be O((n^3)/4)
function findPalindromes(a: string[]) {
  let palindromes = [];


  // n => length of a string  
  //this will go by the middle so the complexity would be O(n/2)
  for (let middle = 0; middle < a.length; middle++) {
    let pointerSideWays = 1;

    let addedTempChar = false;

    // 2 iterations because, 
    // 1st to check for the odd length of palindromes
    // 2nd to check for the even length of palindromes

    // since 2 iterations, the complexity would be O(n/2 * 2) => O(n)
    for (let count = 0; count < 2; count++) {
        
      //2nd to check for the even length of palindromes
      // the even numbered string is converted to a odd numbered string
      // example, abba => abTEMPCHARba
      if (count == 1) {
        pointerSideWays = 1;
        a.splice(middle, 0, TEMP_CHAR);
        addedTempChar = true;
      }


      //the maximum value of middle can reach up to n/2 so the complexity would be  O(n * n/2) => O((n^2)/2)   
      for (let i = 0; i < middle; i++) {
        if (a[middle - pointerSideWays] && a[middle + pointerSideWays]) {
          if (a[middle - pointerSideWays] != a[middle + pointerSideWays]) {
            continue;
          }
          if (a[middle - pointerSideWays] == a[middle + pointerSideWays]) {
            let temp = "";

            // this loop is to keep a record of all palindromes, which can be skipped we just want to have a count
            // the maximum value of middle can reach up to n/2 so the complexity would be  O((n^2)/2 * n/2) => O((n^3)/4)
            
            for (
              let j = middle - pointerSideWays;
              j <= middle + pointerSideWays;
              j++
            ) {
              if (a[j] !== TEMP_CHAR) {
                temp = temp.concat(a[j]);
              }
            }

            palindromes.push(temp);
          }

          pointerSideWays = pointerSideWays + 1;
        }
      }

      if (addedTempChar) {
        a.splice(middle, 1);
        addedTempChar = false;
      }
    }
  }

  return palindromes;
}

const palindromes = findPalindromes(exampleString);

console.log("palindromes", palindromes);

  