function findAnagrams(words) {
    const result = [];
    const frequencyCounters = {};

  
    for (let word of words) {
        function findAnagrams(words) {
            const result = [];
            const frequencyCounters = {};
          
         
            for (let word of words) {
              
              const frequencyCounter = {};
          
              for (let char of word) {
                frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
              }
          
          
              const counterString = JSON.stringify(frequencyCounter);
          
              
              if (frequencyCounters[counterString]) {
       
                frequencyCounters[counterString].push(word);
              } else {
                
                frequencyCounters[counterString] = [word];
              }
            }
          
        
            for (let key in frequencyCounters) {
              result.push(frequencyCounters[key]);
            }
          
            return result;
          }
          
          
          const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
          console.log(findAnagrams(words));
         
          
      const frequencyCounter = {};
  
  
      for (let char of word) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
      }
  
   
      const counterString = JSON.stringify(frequencyCounter);
  
    
      if (frequencyCounters[counterString]) {
     
        frequencyCounters[counterString].push(word);
      } else {
        
        frequencyCounters[counterString] = [word];
      }
    }
  
  
    for (let key in frequencyCounters) {
      result.push(frequencyCounters[key]);
    }
  
    return result;
  }
  
 
  const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
  console.log(findAnagrams(words));

  

  