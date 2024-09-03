// const sentence = 'I am a good and hardworking parson-learner';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));


function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;
  
  let lowerCaseStr = str.toLowerCase();

  for (let char of lowerCaseStr) {
      if (vowels.includes(char)){
        count++;
      }
  }
  return count;
}
let exampleString = "Arian Grande is a popular artist.";
let vowelCount = countVowels(exampleString);
console.log(`The string contains ${vowelCount} vowels.`);