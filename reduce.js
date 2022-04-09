  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
nums = [0, 1, 2, 3, 4];

// acc = accumulator, curr = curentValue
let sum1 = nums.reduce((acc, curr) => acc + curr, 0); // 0 is the initial value, this could be set to 10, 5 or any number
console.log(sum1);

// Stepping in to how the reduce function works
let sum2 = nums.reduce((acc, curr) => {
  console.log(
    "Accumlator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr,
  );
  return acc + curr;
});

console.log(sum2);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);


// Grouping by a property, and totaling it too
// { Developer: 12, Designer: 4 } <------- These are the results we want!
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);