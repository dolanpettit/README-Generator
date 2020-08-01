const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./assets/generateMD");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "Title",
  },
  {
    type: "input",
    message: "Describe your project:",
    name: "Description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "Instillation",
  },
  {
    type: "input",
    message: "Provide instructions for use:",
    name: "Usage",
  },
  {
    type: "input",
    message: "Contributors?",
    name: "Contributors",
  },
  {
    type: "input",
    message: "How do you test your project?",
    name: "Test",
  },
  {
    type: "list",
    message: "Select license",
    name: "License",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LPGLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "Contact info for further questions:",
    name: "Questions",
  },
  {
    type: "input",
    message: "Your github username:",
    name: "Username",
  },
  {
    type: "input",
    message: "Your email:",
    name: "Email",
  },
];

const license = {
  ["GNU AGPLv3"]:
    "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.",
  ["GNU GPLv3"]:
    "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.",
  ["GNU LGPLv3"]:
    "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.",
  ["Mozilla Public License 2.0"]:
    "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.",
  ["Apache License 2.0"]:
    "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  ["MIT License"]:
    "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  ["Boost Software License 1.0"]:
    "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  ["The Unlicense"]:
    "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.",
};

const badges = {
  ["GNU AGPLv3"]:
    "[![Generic badge](https://img.shields.io/badge/License-GNU_AGPL-<COLOR>.svg)](https://shields.io/)",

  ["GNU GPLv3"]:
    "[![Generic badge](https://img.shields.io/badge/License-GNU_GPL-<COLOR>.svg)](https://shields.io/)",

  ["GNU LGPLv3"]:
    "[![Generic badge](https://img.shields.io/badge/License-GNU_LGP-<COLOR>.svg)](https://shields.io/)",

  ["Mozilla Public License 2.0"]:
    "[![Generic badge](https://img.shields.io/badge/License-Mozilla-<COLOR>.svg)](https://shields.io/)",

  ["Apache License 2.0"]:
    "[![Generic badge](https://img.shields.io/badge/License-Apache_2.0-<COLOR>.svg)](https://shields.io/)",

  ["MIT License"]:
    "[![Generic badge](https://img.shields.io/badge/License-MIT-<COLOR>.svg)](https://shields.io/)",

  ["Boost Software License 1.0"]:
    "[![Generic badge](https://img.shields.io/badge/License-Boost_1.0-<COLOR>.svg)](https://shields.io/)",

  ["The Unlicense"]:
    "[![Generic badge](https://img.shields.io/badge/License-Unlicense-<COLOR>.svg)](https://shields.io/)",
};

// function to write README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      throw err;
    }
    console.log("Succesfully wrote:" + filename);
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const response = generateMarkdown(answers);
    console.log(answers);
    writeToFile("README.md", response);
  });
}

// function call to initialize program
init();
