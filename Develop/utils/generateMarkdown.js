// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `## ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
    1. [Installation] (#Installation)
    2. [Usage] (#Usage)
    3. [Contributing] (#Contributors)
    4. [Tests] (#Tests)
    5. [License] (#License)
    6. [Questions] (#Questions)

    ## Installation
    ${data.installation}

    ## Usage Instructions
    ${data.usage}

    ## Contributing
    ${data.contributors}

    ## Tests
    ${data.test}

    ## License
    ${data.license}

    ## Questions
    If you need to get ahold of me, you can find me on GitHub at https://github.com/${data.github}
    You can also reach me via email at ${data.email}
`;
}

module.exports = generateMarkdown;