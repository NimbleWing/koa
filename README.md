![GitHub Workflow Status](https://img.shields.io/github/workflow/status/NimbleWing/koa/CI?style=plastic)
![GitHub](https://img.shields.io/github/license/NimbleWing/koa?style=plastic)
![npm (scoped)](https://img.shields.io/npm/v/@nwing/koa)
# Koa
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
  const staticPath = '.';
  await Koa(port,{router,staticPath})
})();
```
# License

MIT

