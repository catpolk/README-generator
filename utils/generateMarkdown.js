
//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge = '';

  if (license === 'MIT License') {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`
  } else if (license === 'Apache 2.0') {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`
  } else if (license === 'GNU v3.0') {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`
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
  } else if (license === 'GNU v3.0') {
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
    licenseSection =`${license}`
  }
  return licenseSection;
}

//a function generates markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

  ## Description:    
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
  ## ${renderLicenseBadge(data.license)}
  ## ${renderLicenseSection(data.license)} 
  ### ${renderLicenseLink(data.license)}
  
  ## Contributing:
  ### ${data.contribution}
  
  ## Tests:
  ### ${data.test}
  
  ##  Qestions: 
  ### ${data.questions}

  ### Contact me: 
  ### My Github username: https://github.com/${data.github}
  ### My email: ${data.email}`;
}

module.exports = generateMarkdown;
