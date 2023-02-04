// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
 ${answer.title}
 https://github.com/crocplage/README-PROJECT

## Description: 
* ${answer.description}


## Table of Content:
* ${answer.content}


# Installation:
* ${answer.credit}


# Usage:
# ${answer.Usage}

# Contributions:
* ${answer.contributions}
# Tests:
* ${answer.tests}
# Github:
* ${answer.Github}
`;
}

module.exports = generateMarkdown
