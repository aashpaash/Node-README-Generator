// TODO: Create a function that returns a license badge based on which license is passed in, the license link, and license section
// If there is no license, return an empty string
function renderLicense(license) {
  if (license === 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/License-None-grey.svg)](http://unlicense.org/)`
  }
  if (license === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
}

// TODO: Create a function to generate markdown for README
// Get data from objects
function generateMarkdown(data) {
  return `# ${data.title}
  ##Table of Contents
  *[Title](#title)
  *[Description](#description)
  *[Objective](#objective)
  *[Input](#input)
  *[Test](#test)
  *[Usage](#usage)
  *[Installation(#installation)
  *[Contributors](#contributors)
  *License(#license)
  *Questions(#questions)
  
  ##License(#license)
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  ##Description
  ${data.description}
  
  ##Objective
  ${data.objective}
  
  ##Test
  ${data.test}
  
  ##Usage
  ${data.usage}
  
  ##Installation
  ${data.installation}
  
  ##Contributors
  ${data.contributors}
  
  ##Input
  ${data.input}
  
  ##Questions
  *If you have any questions or would like to contribute to the code please contact me via [GitHub Profile](https://github.com/${data.github}) or email (mailto:${data.email}). 

  ## License
  Copyright (c) [${data.github}](https://github.com/${data.github}).
  
${data.license} license.
`;
}

module.exports = generateMarkdown;
