function checkScope() {
    'use strict';
    let  i = 'function scope';
    if (true) {
     const i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
  checkScope();
  
  const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
    s.sort();
  // Only change code above this line
}
editInPlace();