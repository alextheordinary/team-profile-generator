// Used to build Team Profile HTML Page
const fs = require('fs');
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
         <section class="section">
           <div class="container">
             <h1 class="title">
               Hello World
             </h1>
             <p class="subtitle">
               My first website with <strong>Bulma</strong>!
             </p>
           </div>
         </section>
         </body>
       </html>`;
    }

    writeFile() {
        fs.writeFile('index.html', this.staticHTML1,
         (err) => err ? console.error(err) : console.log('Wrote to index.html'))
    }

} ;
module.exports = BuildPage;