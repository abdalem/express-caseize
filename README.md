<!-- <p align="center"><img src="logo.png" /></p> -->

<h1 align="center"> Express-Caseize </h1>

<p align="center"> Express middleware build on top of caseize to manage json response's and request's params data case </p>

<hr/>

<p> Express-Caseize allow you, using Caseize package, to add a middleware to caseize body and query from requests in order to make your express application compatible with any casing type. To manage response, use caseize package on your data, before sending them.</p>

<!-- <h3> List of features </h3>

<ul>
  <li>Casing to snakecase</li>
  <li>Casing to camelcase</li>
</ul> -->

<!-- <h3> Demo </h3> -->

<!-- <a href="#"> Link to Demo </a> -->

<h3> Code Demo </h3>

```js
import expressCaseize from 'express-caseize'
import express from 'express'

const app = express()
const optionnalCasing = 'camelcase' //optionnal, default to 'camelcase', see caseize package for available cases
app.use(expressCaseize(optionnalCasing))

//Response example
import caseize from 'caseize'

data = {/*any data*/}
res.json(caseize(data))
```

<h3> Download & Installation </h3>

```shell
$ npm i express-caseize
```
<h3>Contributing</h3>
Keep it simple. Keep it minimal. Don't put every single feature just because you can.

<h3>Authors or Acknowledgments</h3>
<ul>
  <li>abdalem</li>
</ul>

<h3>License</h3>

This project is licensed under the ISC License
