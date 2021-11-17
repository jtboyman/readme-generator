// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenses => {
  if (licenses === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (licenses === 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(licenses) {}
const renderLicenseLink = licenses => {
  if (licenses === 'None') {
    return '';
  }
  else {
    return `
    * [License](#license)`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = licenses => {
  if (licenses === 'None') {
    return '';
  }
  else {
    return `
    ### License:
    Licensed under the ${licenses} license.`
  }
};

const renderProjectLink = projectLink => {
  if (!projectLink) {
    return '';
  }
  else {
    return `
    ${projectLink}`
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {

  const {projectLink, screenshot, licenses, ...inputInfo} = data;

  return `
  # ${inputInfo.projectName}
  ${renderLicenseBadge(licenses)}

  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)${renderLicenseLink(licenses)}
  * [Contributors](#contributors)
  * [Questions](#questions)
  
  ### Description:
  ${inputInfo.projectDesc}${renderProjectLink(projectLink)}

  ### Installation:
  ${inputInfo.install}

  ### Usage:
  ${inputInfo.usage}
  ![alt text](${inputInfo.screenshot})${renderLicenseSection(licenses)}

  ### Contributors
  ${inputInfo.contribute}

  ### Contact/Questions
  You can reach me for additional questions at:
  * GitHub: [${inputInfo.githubUsername}](https://github.com/${inputInfo.githubUsername})
  * Email: ${inputInfo.email}
`;
};

module.exports = {generateMarkdown};
