// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license)  {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;

    case "Apache License 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;

    case "Boost Software License 1.0": 
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
      break;

    case "none":
      return ""
      break;
  }
  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'N/A') {
    return ''
  } else return `[License](#license)`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'N/A'){
    return ''
  } else return `Licensed under the ${license} license`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#guidelines)
  - [Tests](#test)
  - [License](#license)
  - [Questions](#questions)
  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  Link to video walkthrough: https://drive.google.com/file/d/1hOYWIQfyTCgLvCcsC29WZOYj5eoE-Pik/view

  ## License
  ${data.license}

  ## Contribution
  ${data.guidelines}

  ## Tests
  ${data.test}

  ## Questions
  For any questions or concerns, please contact me through ${data.email}

  See my GitHub profile here (https://github.com/${data.username})

 
`;
}

module.exports = generateMarkdown;