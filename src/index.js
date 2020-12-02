import Koa from 'koa';
import Assert from 'assert';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import Compose from 'koa-compose';
import Helmet from 'koa-helmet';
import Respond from 'koa-respond';
import Morgan from 'koa-morgan';
import Cors from '@koa/cors';
import Static from 'koa-static';
import Conditional from 'koa-conditional-get';
import Etag from 'koa-etag';

const app = new Koa();

async function init($port, $option = {}) {
  const option = $option;
  Assert.ok(option.router, 'the params router is needed!');
  Assert.ok(option.router instanceof Router, 'the router need to be instance of koa-router');
  if (!option.static) {
    option.static = '.';
  }
  const allMiddlewares = Compose([
    Morgan('combined'),
    Helmet(),
    Conditional(),
    Etag(),
    Respond(),
    BodyParser({ enableTypes: ['json', 'form'] }),
    Cors(),
    Static(option.static),
    option.router.routes(),
  ]);
  app.use(allMiddlewares);
  const server = await app.listen($port);
  return server;
}
export default init;
