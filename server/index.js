var express = require('express')
var app = express()

const user2 = {
  "id": 2,
  "username": "guest",
  "firstname": "Guest",
  "lastname": "Guest",
  "title": "Guest",
  "summary": "Guest's summary",
  "admin": false,
  "disabled": false,
  "skills": [
      {
          "id": 1,
          "userid": 2,
          "skill": "Java",
          "level": 5
      }
  ],
  "qualifications": [
      {
          "id": 1,
          "userid": 2,
          "qualification": "M.Sc Computer Science, University of Southampton"
      }
  ],
  "projects": [
      {
          "id": 1,
          "userid": 2,
          "employer": "Employer",
          "projectName": "Project",
          "role": "Role",
          "summary": "Project Summary"
      }
  ]
};

app.post('/api/security/login', function(req, res) {
  res.send(user2);
})

app.get('/api/user', function(req, res) {
  res.send(user2);
});

app.get('/api/users', function(req, res) {
    res.send([
        {
            "id": 1,
            "username": "admin",
            "firstname": "Admin",
            "lastname": "Admin",
            "title": "Admin",
            "summary": "Admin's summary",
            "admin": true,
            "disabled": false,
            "skills": [],
            "qualifications": [],
            "projects": []
        }, user2
    ]);
})

app.listen(4000, function() {
    console.log('Example app listening on port 4000!')
})
