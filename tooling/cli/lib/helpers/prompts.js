const inquirer = require('inquirer');

const promptQuestions = async questions => {
  return new Promise((resolve, reject) => {
    inquirer.prompt(questions).then(resolve).catch(reject);
  });
};

module.exports = { promptQuestions };
