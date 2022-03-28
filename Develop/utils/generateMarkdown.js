// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    if (license === 'None') {
        return ''
    } else {
    return `![License](https://img.shields.io/badge/license-${license}-green)`
    };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if (license === 'None') {
        return ''
    } else if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
    }else if (license === 'Boost') {
    return 'https://www.boost.org/LICENSE_1_0.txt'
    } else if (license === 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/agpl-3.0'
    } else if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT'
    };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
    if (license === "None") {
        return 'This project does not currently have a license.'
    } else {
    return `This project is licensed through ${license} `
    };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
-[Installation](#installation)  
-[Usage](#usage)  
-[Contributing](#contributing)  
-[Tests](#tests)  
-[License](#license)  
-[Questions](#questions)  

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributors}

## Tests
${data.test}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Questions
If you need to get ahold of me, you can find me on GitHub at https://github.com/${data.github}

You can also reach me via email at ${data.email}
`;
}

module.exports = generateMarkdown;