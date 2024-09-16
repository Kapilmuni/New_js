const num = [10, 5, 20, 15, 25];
const givenValue = 12;
console.log("Comparison Table");
console.log(`Number | Greater Than | Less Than | Greater Than or Equal To | Less Than or Equal To`);
for (let i = 0; i < num.length; i++) {
  const number = num[i];
  console.log(`${number} | ${number > givenValue} | ${number < givenValue} | ${number >= givenValue} | ${number <= givenValue}`);
}