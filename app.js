const express = require("express");
const { v4: uuidv4 } = require('uuid');
const app = express();

const connection = require('./db/connection');
const { User } = require("./models/user");
const { Project } = require("./models/project");
const { License } = require("./models/license");
const { Log } = require("./models/log");
const { cookieExists, getCookie, destroyCookie } = require('./src/servercookie');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const { RegisterValidator, LoginValidator, ProjectValidator } = require('./validators');
const { validationResult } = require('express-validator');

function ErrorHandler(status, msg) {
    this.status = status;
    this.msg = msg;
}

// Register Handler
app.post('/api/private/register', RegisterValidator, (req, res) => {
    const valError = (validationResult(req)).array();
    allError = [];

    const email = User.find({'email':req.body.email})
    .then(results => {
        if (results.length > 0) {
            throw new ErrorHandler(409, ["Email already exists in the database"]);
        }
        if (valError.length > 0) {
            valError.forEach(element => {
                const {msg} = element;
                allError.push(msg);
            });
            throw new ErrorHandler(422, allError);
        }
        let user = new User(req.body);
        user.save()
    })
    .then(results => {
        res.status(201).json({status:["Account succesfully created"]});
    })
    .catch(error => res.status(error.status).json({status: error.msg}));
});

// Login Handler
app.post('/api/private/login', LoginValidator, (req, res) => {
    const valError = (validationResult(req)).array();
    allError = [];

    if (valError.length > 0) {
        valError.forEach(element => {
            const {msg} = element;
            allError.push(msg);
        });
        return res.status(422).json({status:allError});
    }
    // Get user's email (wait for this to finish)
    const user = User.findOne({'email':req.body.email})
    .then(result => {
        if (result == null) {
            throw new ErrorHandler(404, ["Email does not exist"]);
        } 
        else {
            if (req.body.password == result.password) 
            {
                res.cookie('email', result.email);
                res.cookie('name', result.name);
                res.cookie('logged-in', "true");
                res.status(200).json({status:["Logged In"]});
            }
            else {
                throw new ErrorHandler(403, ["Your password is wrong"]);
            }
        }     
    })
    .catch(error => res.status(error.status).json({status: error.msg}));
});

// New Project
app.post('/api/private/newproject/:email', ProjectValidator, (req, res) => {
    const valError = (validationResult(req)).array();
    allError = [];

    // Validation
    if (valError.length > 0) {
        valError.forEach(element => { allError.push(element.msg); });
        return res.status(422).json({status:allError});
    }

    // Create new project
    let user;
    User.findOne({'email': req.params.email})
    .then(userRes => {
        user = userRes;
        return Project.findOne({'name':req.body.name});
    })
    .then(projRes => {
        if (projRes != null) {
            res.status(409).json({status:["Project already exists in your data"]});
        } else {
            let proj = new Project(req.body);
            return proj.save();
        }
    })
    .then(projOut => {
        user.projects.push(projOut._id);
        return user.save();
    })
    .then(projOut => {
        res.status(200).json({status:["Project succesfully created"]});
    })
    .catch(error=>res.status(422).json({status:["Failed to create project"]}));
});

// Generate License
app.post('/api/private/newlicense/:project', (req, res) => {
    const guid = uuidv4();
    let proj;
    Project.findOne({'name': req.params.project})
    .then(projRes => {
        proj = projRes;
        let license = new License({
            license: guid,
            generatedBy: req.body.email,
            dateCreated: req.body.dateCreated, 
            dateLastUse: req.body.dateLastUse});
        return license.save();
    })
    .then(licenceRes => {
        proj.licenses.push(licenceRes._id);
        return proj.save();
    })
    .then(projOut => {
        res.status(200).json({status:["License succesfully generated"], license:guid});
    })
    .catch(error=>res.status(422).json({status:["Failed to create project"]}));
});

app.post('/test', (req,res) => {
    console.log("test");
    res.send(req.ip)
});

// Check License
// app.post('/api/public/checklicense/:project/:license', (req, res) => {

// });

// Get All Licenses of all projects
app.get('/api/private/licensecount/:email', (req, res) => {
    let count = 0;
    User.findOne({'email': req.params.email})
    .populate(['projects', 'licenses'])
    .then(results => {
        results.projects.map(res=>count += res.licenses.length);
        res.json({licenseCount: count});
    })
    .catch(error=>res.status(422).send(error));
});

// Get All Licenses of a project
app.get('/api/private/license/:project', (req, res) => {
    Project.findOne({'name': req.params.project})
    .populate("licenses")
    .then(results => {
        res.json(results.licenses);
    })
    .catch(error=>res.status(422).send(error));
});

// Get All Project of a user
app.get('/api/private/projects/:email', (req, res) => {
    User.findOne({'email': req.params.email})
    .populate("projects")
    .then(results => {
        res.json(results);
    })
    .catch(error=>res.status(422).send(error));
});

// Get All Users
app.get('/api/private/users', (req, res) => { 
    User.find({}).then(results => {
        res.send(results);
    })
    .catch(error=>res.status(422).send(error));
});

// Check for other routes
app.get('*', (req, res) => {
    res.status(404).json("Page Not Found");
});

// Connection to database and express
connection.once('open', ()=>{
    console.log('Connected to db');
    const server = app.listen(process.env.PORT || 8080, ()=>{
        console.log('Listening on port 8080');
    });
});