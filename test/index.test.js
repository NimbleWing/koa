import Router from 'koa-router';
import Path from 'path';
import { assert, expect } from 'chai';
import Koa from '../src';

const router = new Router();
const staticPath = '../static';
const port = 8090;
let server;
describe('koa test', () => {
  after(() => {
    if (server) {
      server.close();
    }
  });
  it('router is required', async () => {
    try {
      await Koa(port);
    } catch (error) {
      assert.throw(() => {
        throw error;
      }, 'the params router is needed!');
      return;
    }
    expect(() => { }).to.throw();
  });
  it('the router need to be instance of koa-router', async () => {
    try {
      await Koa(port, { router: {} });
    } catch (error) {
      assert.throw(() => {
        throw error;
      }, 'the router need to be instance of koa-router');
      return;
    }
    expect(() => { }).to.throw();
  });
  it('init', async () => {
    server = await Koa(port, { router, staticPath: Path.join(__dirname, staticPath) });
  });
});
