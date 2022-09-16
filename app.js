const express = require('express');
const path = require('path')
const app = express();
const {spawn} = require('child_process');

app.use('/', express.static(path.join(__dirname, './')))

const PORT = process.env.PORT || 3000;

const {PythonShell} =require('python-shell');


app.listen(PORT, (error) =>{
    if(!error){
        // console.log("Server is listening on http://localhost:"+ PORT)
        let options = {
            mode: 'text',
            pythonOptions: ['-u'], // get print results in real-time
              //If you are having python_test.py script in same folder, then it's optional.
            args: ['h'] //An argument which can be accessed in the script using sys.argv[1]
        };
         
        let pyshell = new PythonShell('./a.py', {mode : 'text'});

        pyshell.on('message', function (m){
              console.log(m)
              // result is an array consisting of messages collected
              //during execution of script.
            //   console.log("broke");
              
        });
        }else{
        console.log("Error occurred, server can't start", error);
    }}
);
