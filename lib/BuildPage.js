// Used to build Team Profile HTML Page
const fs = require('fs');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
class BuildPage {
    constructor() {
        this.staticHTML1 = `<!DOCTYPE html>
       <html>
       
       <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <title>Team Profile Page</title>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
       </head>
       
       <body>
         <section class="hero is-link has-text-centered is-mobile">
           <div class="hero-body">
             <p class="title">
               My Team
             </p>
           </div>
         </section>
         <section class="section">
           <div class="container">
             <div class="columns is-multiline is-centered">`;

        this.staticHTML2 = `      </div>
       </div>
     </section>
   </body>
   </html>`;
    }

    // Generates the HTML code for the employee cards
    generateEmployeeCards() {

    }

    // Creates a team profile page called index.html using the static and dynamic code
    writeFile() {
        fs.writeFile('./dist/index.html', this.staticHTML1,
            (err) => err ? console.error(err) : console.log('Wrote to index.html'))
    }

};
module.exports = BuildPage;