const inquirer = require('inquirer');
const emailValidator = require('email-validator');
const fs = require('fs');

const licenses = ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'BSD', 'None'];

const titleQuestion = {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
};
const descriptionQuestion = {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.'
};
const installationQuestion = {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions.'
};
const usageQuestion = {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information.'
};
const contributionQuestion = {
    type: 'input',
    name: 'contribution',
    message: 'Please provide contribution guidelines.'
};
const testQuestion = {
    type: 'input',
    name: 'test',
    message: 'Please provide test instructions.'
};
const usernameQuestion = {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username.'
};

const emailQuestion = {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
    validate: function (email) {
        if (emailValidator.validate(email)) { return true; }
        return 'Please enter a valid email address.';
    }
};

const licenseQuestion = {
    type: 'list',
    name: 'license',
    message: 'Please select a license.',
    choices: licenses
};


const questions = [titleQuestion, descriptionQuestion, installationQuestion, usageQuestion, contributionQuestion, testQuestion, licenseQuestion, usernameQuestion, emailQuestion];

inquirer
    .prompt(questions)
    .then((answers) => {
        const markdown = `# ${answers.title}

![](https://img.shields.io/badge/license-${answers.license}-green)

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}.

You can find more of my work at [${answers.username}](https://github.com/${answers.username}).
`;
    fs.writeFileSync('README.md', markdown);
    console.log('README.md created!');
});
