#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 1000);
  });
};

const wellcome = async () => {
  let welcomeText = chalkAnimation.rainbow(
    "** =========== Welcome To My CLI Calculator =========== **"
  );
  await sleep();
  welcomeText.stop;

  console.log(
    chalk.blue(`
  ________________________________
 | _____________________________  |
 | |                            | |
 | |                            | |
 | |____________________________| |
 | |____________________________  |
 | |     |     |     |   |     |  |
 | |  7  |  8  |  9  |   |  +  |  |
 | |_____|_____|_____|   |_____|  |
 | |     |     |     |   |     |  |
 | |  4  |  5  |  6  |   |  -  |  |
 | |_____|_____|_____|   |_____|  |
 | |     |     |     |   |     |  |
 | |  1  |  2  |  3  |   |  x  |  |
 | |_____|_____|_____|   |_____|  |
 | |     |     |     |   |     |  |
 | |  .  |  0  |  =  |   |  /  |  |
 | |_____|_____|_____|   |_____|  |
 |_______________________________ |
 `)
  );
  console.log(
    chalk.greenBright(
      figlet.textSync("Develop By Afzzal", {
        font: "Big",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 100,
        whitespaceBreak: true,
      })
    )
  );
};
// wellcome();

async function calcualtion() {
  const ans = await inquirer.prompt([
    {
      type: "number",
      name: "first_num",
      message: "Enter your First Number:",
    },
    {
      type: "list",
      name: "operation",
      message: "Select  your Operation",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    {
      type: "number",
      name: "secand_num",
      message: "Enter your Second Number",
    },
  ]);
  if (ans.operation === "Addition") {
    console.log(
      chalk.greenBright(
        `${ans.first_num}+${ans.secand_num}= ${ans.first_num + ans.secand_num}`
      )
    );
  } else if (ans.operation === "Subtraction") {
    console.log(
      chalk.greenBright(
        `${ans.first_num} - ${ans.secand_num}=${ans.first_num - ans.secand_num}`
      )
    );
  } else if (ans.operation === "Multiplication") {
    console.log(
      `${ans.first_num} * ${ans.secand_num}= ${ans.first_num * ans.secand_num}`
    );
  } else if (ans.operation === "Division") {
    console.log(
      `${ans.first_num}/${ans.secand_num}=${ans.first_num / ans.secand_num}`
    );
  }
}
// calculion();

async function wantTocontinu() {
  do {
    await wellcome();
    await calcualtion();
    var restart = await inquirer.prompt({
      name: "againcalc",
      type: "input",
      message: "Want to restart calcualtion",
    });
  } while (restart.againcalc === "y" || restart.againcalc === "Y");
}
chalk.greenBright(wantTocontinu());
