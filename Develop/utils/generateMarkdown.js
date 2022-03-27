// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    if (!license) {
        return ''
    } else {
    return `https://img.shields.io/badge/license-${license}-green`
    };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if (!license) {
        return ''
    } else {
    return `https://choosealicense.com/licenses/${license.value}/`
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
1. [Installation] (#Installation)
2. [Usage] (#Usage)
3. [Contributing] (#Contributing)
4. [Tests] (#Tests)
5. [License] (#License)
6. [Questions] (#Questions)

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