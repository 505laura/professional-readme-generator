/** Import the modules we need for the script */

/** We use inquirer to ask the user questions and get back their answers */
const inquirer = require('inquirer');

/** email-validator is used to make sure the email provided is correct */
const emailValidator = require('email-validator');

/** fs is used to write the readme once complete */
const fs = require('fs');

/** An array of possible licenses the user can choose from */
const licenses = ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'BSD', 'None'];

/** Configuration for each question we want to ask the user */
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

/** We use a list type to allow the user to only chose from options we define  */
const licenseQuestion = {
    type: 'list',
    name: 'license',
    message: 'Please select a license.',
    choices: licenses
};

/** An array of the questions we want to ask */
const questions = [titleQuestion, descriptionQuestion, installationQuestion, usageQuestion, contributionQuestion, testQuestion, licenseQuestion, usernameQuestion, emailQuestion];

/** Ask the user questions and get the answers */
inquirer
    .prompt(questions)
    .then((answers) => {
        /* We use the answers to create a markdown file */
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
    /** Write the markdown to a file for the user */
    fs.writeFileSync('README.md', markdown);
    console.log('README.md created!');
});
