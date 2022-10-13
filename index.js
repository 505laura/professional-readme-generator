const inquirer = require('inquirer');

inquirer
    .prompt({
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    })
    .then((answers) => {
        console.log(answers)
    });
