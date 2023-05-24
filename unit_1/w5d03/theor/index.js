function mostFrequentWord(paragraph) {

    const words = paragraph.split(' ');
  

    const wordFrequencies = {};
  
  
    for (let word of words) {
    
      const lowercaseWord = word.toLowerCase();
  
   
      if (wordFrequencies[lowercaseWord]) {
     
        wordFrequencies[lowercaseWord]++;
      } else {
  
        wordFrequencies[lowercaseWord] = 1;
      }
    }
  
    let mostFrequent = '';
    let highestFrequency = 0;
  

    for (let word in wordFrequencies) {
      if (wordFrequencies[word] > highestFrequency) {
        highestFrequency = wordFrequencies[word];
        mostFrequent = word;
      }
    }
  
    return mostFrequent;
  }
  

  const paragraph = "The quick brown fox jumped over the lazy dog. The fox was really quick.";
  const result = mostFrequentWord(paragraph);
  console.log(result);  