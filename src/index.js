module.exports = function getZerosCount(number) {
  const FIRST=2;
  const SECOND=5;
  let resultdevision1=0, resultdevision2=0;
  let number1=number;
  let number2=number;
while (Math.floor(number1/FIRST)!=0){
  number1=number1/FIRST;
  resultdevision1+=Math.floor(number1);
}
while (Math.floor(number2/SECOND)!=0){
  number2=number2/SECOND;
  resultdevision2+=Math.floor(number2);
 }
  return Math.min(resultdevision1, resultdevision2);
}
