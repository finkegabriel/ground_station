const express = require('express')
const app = express()
const port = 3000;

let satDat = {};

app.get('/sats', (req, res) =>
    res.send('good'));

app.get('/tle', (req, res) => {
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./main.py"]);
    process.stdout.on('data', function (data) {
        console.log(data.toString());
        satDat = {tle:data.toString()};
        return satDat;

    });
    res.send(satDat);
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

