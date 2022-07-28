const express = require('express');
const app = express();
const port = process.env.PORT || 8000;   //for global hosting of app
const hbs = require('hbs');
const path = require('path');


const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');  //for template engine hbs.
app.set('views', template_path);
hbs.registerPartials(partial_path);



app.use(express.static(static_path));  //built-in middleware

app.get("/", (req, res) =>
              {
                // res.send(`<h1>This is home page</h1>`);
                res.render('index');  //after installing hbs.
              }
      );

app.get("/quotes", (req, res) =>
              {
                      // res.send(`<h1>This is home page</h1>`);
                      res.render('quotesnew');  //after installing hbs.
              }
      );

app.get("/about", (req, res) =>
                    {
                            // res.send(`<h1>This is home page</h1>`);
                            res.render('about');  //after installing hbs.
                    }
        );

        app.get("/rough", (req, res) =>
                            {
                                    // res.send(`<h1>This is home page</h1>`);
                                    res.render('rough');  //after installing hbs.
                            }
                );


app.get("*", (req, res) =>
              {
                     // res.send(`<h1>404 error page</h1>`);
                     // res.render(`<h1>404 error page</h1>`);
                      res.render('404error',{
                                                error_msg :`Opps! Page Not Found`
                                            }
                                );
              }
        );


app.listen(port, () =>
                  {
                      console.log(`This is port no. ${port}`);
                  }
          );


// nodemon src/app.js -e js,hbs
