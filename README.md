# LiaAuth
Simple Licensing API
made for my full stack web development final project

-Uses mongodb, react, express, more...

## Usage

Post Request to<br />
/api/public/checklicense<br />

email: String<br />
project: String<br />
license: String<br />

Responses:<br />
404: "License not found on project"<br />
403: "Key is already used by another user"<br />
403: "Project not found"<br />
200: "License OK"<br />

Sample Project<br />
https://www.mediafire.com/file/iwv69l7edax2zjg/LiaAuth_SampleProject.zip/file

## Preview

![image](https://user-images.githubusercontent.com/73958774/130163611-1b37facd-2c8f-429f-92ea-73b8f25db0cc.png)
