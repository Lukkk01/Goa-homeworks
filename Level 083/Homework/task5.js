const numSet = new set([1,2,2,3,4,4,5,6]);

const acc = 0
for (const num of numSet) {
    acc += num
}

console.log(acc)