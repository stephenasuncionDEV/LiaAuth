# LiaAuth
Simple Licensing API
made for my full stack web development final project

-Uses mongodb, react, express, more...

## Usage

Post Request to
/api/public/checklicense

email: String
project: String
license: String

Responses:
404: "License not found on project"
403: "Key is already used by another user"
403: "Project not found"
200: "License OK"

Sample Project
https://www.mediafire.com/file/iwv69l7edax2zjg/LiaAuth_SampleProject.zip/file
