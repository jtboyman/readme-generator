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

const renderLicenseLink = licenses => {
  if (licenses === 'None') {
    return '';
  }
  else {
    return `\n * [License](#license)`
  }
};

const renderLicenseSection = licenses => {
  if (licenses === 'None') {
    return '';
  }
  else {
    return `\n ## License:
  Licensed under the ${licenses} license.`
  }
};

const renderProjectLink = projectLink => {
  if (!projectLink) {
    return '';
  }
  else {
    return `\n ${projectLink}`
  }
};

const renderScreenshot = screenshot => {
  if (!screenshot) {
    return '';
  }
  else {
    return `
    ![alt text](${screenshot})`
  }
}

const generateMarkdown = data => {

  const {projectLink, screenshot, licenses, ...inputInfo} = data;

  return `
  # ${inputInfo.projectName}
  ${renderLicenseBadge(licenses)}

  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(licenses)}
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description:
  ${inputInfo.projectDesc}
  ${renderProjectLink(projectLink)}

  ## Installation:
  ${inputInfo.install}

  ## Usage:
  ${inputInfo.usage} ${renderScreenshot(screenshot)}
  ${renderLicenseSection(licenses)}

  ## Contributors
  ${inputInfo.contribute}

  ## Tests
  ${inputInfo.tests}

  ## Questions
  You can reach me for additional questions at:
  * GitHub: [${inputInfo.githubUsername}](https://github.com/${inputInfo.githubUsername})
  * Email: ${inputInfo.email}
`;
};

module.exports = {generateMarkdown};
