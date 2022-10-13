const inquirer = require('inquirer');
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
        console.log(answers)
    });
