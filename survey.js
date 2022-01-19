const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? We also except nicknames. ", (answer) => {
  let one = answer;
  rl.question("What's your favourite season. ", (answer1) => {
    let two = answer1;
    rl.question("What music do you listen to?", (answer2) => {
      let three = answer2;
      rl.question("What are your hobbies?", (answer3) => {
        let four = answer3;
        rl.question("What's your favourite food?", (answer4) => {
          let five = answer4;
          rl.question("What's your favourite sport.", (answer6) => {
            let six = answer6;
            rl.question("What is your superpower?", (answer7) => {
              let seven = answer7;
              console.log(`${one}'s favourite season is ${two}, they love to jam to ${three}. they are super into ${four}, and love to eat ${five}. they enjoy ${six} and if they could have any superpower it would be ${seven}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});