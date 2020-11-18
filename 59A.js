function word(str) {
    let capRegEx = /[A-Z]/g;
    let lowRegEx = /[a-z]/g;  
    let capMatch = str.match(capRegEx);
    let lowMatch = str.match(lowRegEx);
     if(capMatch.length <= lowMatch.length) {
        return str.toLowerCase();
     } else {
        return str.toUpperCase();
  }
  }
  
console.log(word("hoUSE"));