
//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge = '';
    if (badge === 'MIT License') {
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GNU v3.0') {
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    badge = ""
  }
  return badge;
}


//a function that returns the license link
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

//a function that returns the license section of README
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license}`
  }
  return licenseSection;
}

//a function generates markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents:
  ###  * [Description](#description)
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [Contributors](#contributors)
  ###  * [License](#license)
  ###  * [Tests](#tests)

  ##Description:    
  ### Provide a description:
  ### ${data.description}
  
  ## Installation:
  ### ${data.installation}
  
  ## Usage:
  ### ${data.usage}
  
  ## Contributors:
  ### ${data.contributions}
  
  ## Tests:
  ### ${data.test}
  
  ##  Qestions: 
  ### ${data.questions}

  ### How to reach me: 
  ### My Github username: https://github.com/${data.github}
  ### My email: ${data.email}

`;
}

module.exports = generateMarkdown;
