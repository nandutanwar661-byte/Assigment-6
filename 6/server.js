const http = require('http');

const PORT = 3000;

//creating server
const server = http.createServer((req, res) => {

    // css style
    const style =`
    <style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    body{font-family: Arial, sans-Serif;}
    nav{background: #333; padding: 10px;}
    
   /* nav bar */
    nav{ background: #023e8a; padding: 12px; text-align: center; position: sticky; top: 0; z-index: 1000; }
    nav a{ color: white; margin: 0 20px; text-decoration: none; font-size: 1.1rem; font-weight: 500; transition: 0.3s;}
    nav a:hover{color: #caf0f8; text-decoration: underline;}

    /* container */
    .container {max-width: 800px; background: white; margin: 50px auto; padding: 40px; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); text-align: center;}
    h2 {color: #0077b6; margin-bottom: 20px; font-size: 2rem;}
    p {margin-bottom: 20px; font-size: 1.1rem; color: #555;}
    .btn {display: inline-block; padding: 10px 20px; background: #0077be; color: white; text-decoration: none; border-radius: 50px; font-weight: bold; transition: 0.4s; margin-top: 10px;}

    /* contact details */
    .contact-info{text-align: left; display: inline-block; margin-top:20px;}
    .contact-info p{margin: 10px 0; font-weight: bold;}

    /* 404 page */
    .error-code{font-size: 80px; color: #e63946; font-weight: bold;}
    </style>
`;

    // home route
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <html>
                <head><title>freshwash | home</title>${style}</head>
                <body>
                    <nav><a href="/home">Home</a><a href="/about">about</a><a href="/contact">contact</a></nav>
                    <div class="container">
                        <h1>Welcome to FreshWash!</h1>
                        <p>Fresh Laundry offers professional,specializing in premium garment care.</p>
                    </div>
                </body>
            </html>
        `);

    // About ROUTE
    }else if(req.url ==='/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
        <html>
            <head><title>about | freshwash</title>${style}</head>
            <body>
                <nav><a href="/home">Home</a><a href="/about">about</a><a href="/contact">contact</a></nav>
                <div class="container">
                    <h1>Our Expertise</h1>
                    <p>We have been providing professional dry cleaning, washing, and ironing services for over 10 years.</p>
                </div>
            </body>
        </html>
        `);

        // CONTACT ROUTE 
    }else if(req.url ==='/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
         res.end(`
            <html>
                <head><title>Contact | FreshWash</title>${style}</head>
                <body>
                    <nav><a href="/home">Home</a><a href="/about">About Us</a><a href="/contact">Contact</a></nav>
                    <div class="container">
                        <h1>Connect with Us</h1>
                        <p> Address: 123, Main Street, Delhi</p>
                        <p> phone: +91 9876543210</p>
                        <p> Email: help@freshwash.com</p>
                    </div>
                </body>
            </html>
        `);
        
    // 404 ROUTE
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(`
            <html>
                <head><title>404 Not Found</title>${style}</head>
                <body>
                    <div class="container" style="margin-top:100px;">
                        <h1 style="color:red; font-size: 50px;">404</h1>
                        <h2>Oops! This page isn't here.</h2>
                        <p>Please type the correct URL or go back to the home page.</p>
                        <a href="/home" class="btn">Go Back to Home</a>
                    </div>
                </body>
            </html>
        `);
    }
});

// listening to server
server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
});