const totp = require("totp-generator");
const express = require('express')
const base32Encode = require('base32-encode')
const app = express()
const port = 8080

let secret = "BSA4MRQEIFKRZZ56";

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-=~`<>?,./:";\'{}[]|\\';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function makeSecret() {
    return base32Encode(makeid(16), 'RFC4648');
}

app.get('/', (req, res) => {
    if (req.query["token"] === undefined) {
        res.send(`Here is a new TOTP secret for you: ${makeid(16)}`)
    } else {
        const token = totp(req.query["token"])
        res.send(`Your TOTP number is: ${token}`)
    }
})

// A function that checks the TOTP number
app.get('/secret', (req, res) => {
    if (req.query["token"] !== totp(secret)) {
        res.send(`Wrong TOTP!`);
    } else {
        res.send(`Correct! Here is the secret phrase: hello_world`);
    }
})

app.listen(port, () => {
    console.log(`Go to http://localhost:${port}`)
})