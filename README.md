![GitHub Workflow Status](https://img.shields.io/github/workflow/status/NimbleWing/koa/CI?style=plastic)
![NPM](https://img.shields.io/npm/l/@nwing/koa?style=plastic)
![npm (scoped)](https://img.shields.io/npm/v/@nwing/koa)
# Fetch Github Repo
Download and extract a GitHub repository from node.
# KOA
koa wrapper

# Installation

```shell
$ npm @nwing/koa
```

# Usage
```javascript
import Koa from '@nwing/koa';
import Router from 'koa-router';
(async ()=>{
  const port = 8080;
  const router = new Router();
  const static = '.';
  await Koa(port,{router,static})
})
```
# License

MIT

