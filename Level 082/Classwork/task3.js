const manualMap = (arr, fn) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) res.push(fn(arr[i]));
  return res;
};

const manualFilter = (arr, fn) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) if (fn(arr[i])) res.push(arr[i]);
  return res;
};

const nums = [1, 2, 3, 4, 5];

console.log(manualMap(nums, n => n * 2)); 
console.log(manualFilter(nums, n => n % 2));
