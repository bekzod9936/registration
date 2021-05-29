const arr = [2, 3, 8, 3 , 25 , 89 ,23]

const renderStar=(numbers)=>{
 return numbers.map(number => Array(number).fill('*'))
}
console.log(renderStar(arr));
