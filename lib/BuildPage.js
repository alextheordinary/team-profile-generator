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

    // Private method - Generates the HTML code for the employee cards based on employee role. Parameter is expected to be one of the children of the Employee class (Manger, Engineer, or Intern).
    #generateEmployeeCard(employee) {
        let nameValue = employee.getName();
        let roleValue = employee.getRole();
        let idValue = employee.getId();
        let emailValue = employee.getEmail();
        let otherValue;
        let otherHTML;
        switch (roleValue) {
            case 'Manager': {
                otherValue = employee.getOfficeNumber();
                otherHTML = `<div class="box">Office: ${otherValue}</div>`;
                break;
            }

            case 'Engineer': {
                otherValue = employee.getGithub();
                otherHTML = `<div class="box">Github: <a href="https://github.com/${otherValue}">github.com/${otherValue}</a></div>`;
                break;
            }

            case 'Intern': {
                otherValue = employee.getSchool();
                otherHTML = `<div class="box">School: ${otherValue}</div>`;
                break;
            }
        }
        const cardHTML = `<div class="column is-4">
        <div class="card">
          <header class="card-header has-background-info">
            <p class="card-header-title has-text-white">
              ${nameValue} <br> ${roleValue}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="box">ID: ${idValue}</div>
              <div class="box">Email: <a href="mailto:${emailValue}">${emailValue}</a></div>
              ${otherHTML}
            </div>
          </div>
        </div>
      </div>`;
      return cardHTML;
    }

    // Creates a team profile page. Builds a card in HTML for each employee in the employees array. Adds this HTML to the dynamic HTML variable. Once done, it writes the static and dynamic portions of the HTML to a new file called index.html
    writeFile(employees) {
        let dynamicHTML = '';
        for (const employee of employees) {
            let cardHTML = this.#generateEmployeeCard(employee) ;
            dynamicHTML = dynamicHTML + cardHTML;
        }
        let data = this.staticHTML1 + dynamicHTML + this.staticHTML2;
        fs.writeFile('./dist/index.html', data,
            (err) => err ? console.error(err) : console.log('Wrote to index.html'))
    }

};
module.exports = BuildPage;