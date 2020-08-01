// function to generate markdown for README
function generateMarkdown(answers) {
  return `

  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org) 

  ${badges[answers.License]}

  
  # ${answers.Title}

    
  **## Description **
  ${answers.Description}
  
  
  ## Table of Contents
  * [Installation instructions](#instillation)
  * [Usage information](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)


  ## Installation instructions
  ${answers.Installation}
  
  ## Usage information
  ${answers.Usage}
  

  ## License
  ${answers.License}  
  
  ## Contributors
  ${answers.Contributors}

  ## Test
  ${answers.Test}
  
  ## Questions

  For any questions about the project, please feel free to reach out to me on github or via email.  Thank you for viewing this project!

  Contact me: 

  Github:[${answers.Username}]()
  
  Email:[${answers.Email}]()

  `;
}

module.exports = generateMarkdown;
