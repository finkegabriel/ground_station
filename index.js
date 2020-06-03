var spawn = require("child_process").spawn; 
var process = spawn('python',["./main.py"]); 

process.stdout.on('data', function(data) { 
    console.log(data.toString());
} ) 