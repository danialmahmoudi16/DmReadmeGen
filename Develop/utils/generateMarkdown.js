// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    boost: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'N/A') {
    return ''
  } else return `[License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'N/A'){
    return ''
  } else return `Licensed under the ${this.renderLicenseLink(License)} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ##Description
  ${data.description}

  ##Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#guidelines)
  - [Tests](#test)
  - [Questions](#questions)
  

  #Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License
  ${data.license}

  ##Contribution
  ${data.guidelines}

  ##Tests
  ${data.test}

  ##Questions
  

`;
}

module.exports = generateMarkdown;