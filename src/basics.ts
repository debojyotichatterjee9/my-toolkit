
export default null;


function insertBeg<T>(arr:T[], elem:T) {
  return [elem, ...arr];
}

const numArr=insertBeg([1,2,3], 0);
console.log(numArr);
console.log(numArr[0].split(''));

const stringArr = insertBeg(['b', 'c', 'd'], 'a');
console.log(stringArr);
console.log(stringArr[0].split(''));
