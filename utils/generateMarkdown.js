// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {

  const {projectLink, screenshot, licenses, ...data};

  return `
  # ${data.projectName}
  (badge placeholder)

  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Contact/Questions](#contact/questions)
  
  ### Description:
  ${data.projectDesc}
  ${data.projectLink}

  ### Installation:
  ${data.install}

  ### Usage:
  ${data.usage}
  ![alt text](${data.screenshot})

  ### License:
  Licensed under the ${data.license} license.

  ### Contributors
  ${data.contribute}

  ### Contact/Questions
  You can reach me for additional questions at:
  * GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  * Email: ${data.email}
`;
};

module.exports = {generateMarkdown};
