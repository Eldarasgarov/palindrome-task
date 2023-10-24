const words = ["level", "radar", "text", "river", "madam"];

let Count = 0;

for (const word of words) {
  let reverseWord = "";
  for (let i = 0; i < word.length; i++) {
    reverseWord+=word[word.length - i - 1]
      
    
}
 if(word == reverseWord)
  {
    Count+=1
  }

}

console.log(Count);