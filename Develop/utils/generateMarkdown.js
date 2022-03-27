// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    if (!license) {
        return ''
    } else {
    return `[![License](https://img.shields.io/badge/license-${license}-green)`
    };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if (!license) {
        return ''
    } else {
    return `https://choosealicense.com/licenses/${license}/`
    };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
    if (license === "None") {
        return 'This project does not have a license.'
    } else {
    return `This project is licensed through `
    };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
1. [Installation] (#installation)
2. [Usage] (#usage)
3. [Contributing] (#contributing)
4. [Tests] (#tests)
5. [License] (#license)
6. [Questions] (#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributors}

## Tests
${data.test}

## License
${renderLicenseSection()} ${data.license}
${renderLicenseLink()}

## Questions
If you need to get ahold of me, you can find me on GitHub at https://github.com/${data.github}

You can also reach me via email at ${data.email}
`;
}

module.exports = generateMarkdown;