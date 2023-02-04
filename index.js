// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = 
[

   
    {
      type: 'input',
      name: 'title',
      message: 'title',
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Description',
      },
      
     {
       type: 'input',
        name: 'content',
       message: 'table of content',
      },
      {
        type: 'input',
         name: 'credit',
        message: 'credit',
       },
    
      {
        type: 'input',
        name: 'Usage',
        message: 'Usage',
      },
      {
        type: 'input',
         name: 'contributions',
        message: 'contributions',
       },
       {
        type: 'input',
         name: 'tests',
        message: 'tests',
       },
       {
        type: 'input',
         name: 'Github',
        message: 'Github',
       },
      
  ]

  // function writeReadme(answers) {
  //   const readme =`

  //   # ${answers.title}
  //   # ${description}
  //   # ${content}
  //   # ${credit}
  //   # ${us}

  // }

 
    const writeToFile = fileContent => {

    fs.writeFile('READme.md', fileContent, (err) =>
      err ? console.log(err) : console.log('Success!'))

    }   
  
  function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        console.log(answers);
        var fileContent = generateMarkdown(answers);
        writeToFile(fileContent);
    });
  }
  init();

  module.exports = questions;

  


//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });



//   .then((answers)  => {
//     const generateREADME = 'README.md(answers)'
//     fs.writeFile('README.me', questions, (err) =>
//     err ? console.log(err) : console.log('Successfully created')
//     );
//   });
 
  



// for (question of questions) {
    
// }


   
// const songs = [
//     '1: MONTERO (Call Me By Your Name)',
//     '2: Peaches (feat. Daniel Caesar & Giveon)',
//     '3: Kiss Me More (feat. SZA)',
//     '4: Astronaut In The Ocean',
//     '5: Save Your Tears (with Ariana Grande) (Remix)',
//     '6. RAPSTAR',
//     '7. Levitating (feat. DaBaby)',
//     '8. Leave The Door Open',
//     '9. Botella Tras Botella',
//     '10. Fiel',
//   ];
  
//   for(song of songs) {
    
//   outputCyanText(song)
//   }
//   console.log('Spotify top 10:\n');

// inquirer
// .prompt([
//     {
//         type:'input',
//         name:'README',
//         message:questions,
//     }
// ])
// .then((answer) => {
//     answer = questions.message
//     fs.writeFile('README.md', questions, (err) => 
//     err ? console.log(err) : console.log('success')
//     );
// })
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
//  init();
