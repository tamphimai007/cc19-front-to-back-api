# Server

## Step 1 create package

```bash
npm init -y
```

## Step 2 install package....

```bash
npm install express nodemon cors morgan bcryptjs jsonwebtoken zod prisma
```

```bash
npx prisma init
```

## Step 3 Git

create repo in github.com

```bash
git init
git add .
git commit -m "message"
```

next Step
copy code from repo
only first time

```bash
git remote add origin https://github.com/tamphimai007/cc19-front-to-back-api.git
git branch -M main
git push -u origin main
```

when update code

```bash
git add .
git commit -m "message"
git push
```

## Step 4 update package.json

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  }
}
```

and code
index.js

```js
const express = require("express");
const app = express();

// Start Server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```

## Step 5 use middlewares

```js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Middlewares
app.use(cors()); // Allows cross domain
app.use(morgan("dev")); // Show log terminal
app.use(express.json()); // For read json

// Routing

// Start Server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```

## Step 6 Routing & Controller [Register]

/controllers/auth-controller.js

```js
exports.register = (req, res, next) => {
  try {
    // code
    res.json({ message: "hello register " });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error!!" });
  }
};
```

/routes/auth-route.js

```js
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");

// @ENDPOINT http://localhost:8000/api/register
router.post("/register", authControllers.register);

// export
module.exports = router;
```

## Step 7 Create handle Error

/middlewares/error.js

```js
const handleErrors = (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something wrong!!" });
};
module.exports = handleErrors;
```

and use in index.js

```js
const handleErrors = require("./middlewares/error");

// Handle errors
app.use(handleErrors);
```

and change in try_catch

```js
exports.login = (req, res, next) => {
  //code
  try {
    console.log(aaa);
    res.json({ message: "Hello Login " });
  } catch (error) {
    next(error);
  }
};
```

when update code in Github

```bash
git add .
git commit -m "message"
git push
```

```plaintext
text
```

|METHOD|ENDPOINT|BODY|
|-----|-----|-----|
|POST|/api/register| email,password|
