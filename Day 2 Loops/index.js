/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  var arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        console.log(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 'a' && arr[i] != 'o' && arr[i] != 'i' && arr[i] != 'e' && arr[i] != 'u') {
      console.log(arr[i]);
    }
  }
}