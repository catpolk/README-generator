const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
    if (badge === 'MIT License')
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GNU v3.0') {
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    badge = ""
  }
  return badge;



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'Apache 2.0') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'GPL v3.0') {
      licenseLink = 'https://www.gnu.org/licenses'
    } else {
      licenseLink = ""
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${renderLicenseSection(responce.license)} ${renderLicenseBadge(responce.license)}
  ### ${renderLicenseLink(responce.license)}

  ## Table of Contents:
  ###  * [Discription](#discription)
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [Contributors](#contributors)
  ###  * [License](#license)
  ###  * [Tests](#tests)

  ##Discription:
  ### Provide a discription:
  ### ${responce.discription}
  
  ## Installation:
  ### You must install the following for this app to function:
  ### ${responce.installation}
  
  ## Usage:
  ### ${responce.usage}
  
  ## Contributors:
  ### ${responce.contributions}
  
  ## Tests:
  ### Run the following commands in your terminal to test this app:
  ### ${responce.tests}
  
  ### Github: https://github.com/${responce.askMe}
  ### or
  ### Email: ${responce.email}

`;
}

module.exports = generateMarkdown;
