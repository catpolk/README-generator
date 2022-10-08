
//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge = ' ';
    if (badge === 'MIT License') {
      badge = '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)'
    } else if (badge === 'Apache 2.0') {
      badge = '![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    } else if (badge === 'GNU v3.0') {
      badge = '[![GPL License](https://www.gnu.org/licenses/gpl-3.0)]'
    } else {
    badge = ' '
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
      licenseLink = ''
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

  ##Description:    
  ### Provide a description:
  ### ${data.description}

  ## Table of Contents:
  ###  * [Description](#description)
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [Contributors](#contributors)
  ###  * [License](#license)
  ###  * [Tests](#tests)
  
  ## Installation:
  ### ${data.installation}
  
  ## Usage:
  ### ${data.usage}

  ## License
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}
  
  ## Contributing:
  ### ${data.contribution}
  
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
