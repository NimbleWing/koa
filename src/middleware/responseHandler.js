/*
 * @Author: Pure <305737824@qq.com>
 * @CreateTime: 2022-11-14 10:26:51
 * @LastEditors: Pure <305737824@qq.com>
 * @LastEditTime: 2022-11-14 10:46:03
 * @Description:
 */
const statusCodes = {
  // 2xx
  OK: 200,
  // 4xx
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};
export default ({ contentType = 'application/json' } = {}) => async (ctx, next) => {
  const withStatus = (status) => (res = null) => {
    ctx.type = contentType;
    ctx.body = res;
    ctx.status = status;
  };
  ctx.response = Object.assign(ctx.response || {}, {
    // 2xx
    ok: withStatus(statusCodes.OK),
    // 4XX
    badRequest: withStatus(statusCodes.BAD_REQUEST),
    unauthorized: withStatus(statusCodes.UNAUTHORIZED),
    notFound: withStatus(statusCodes.NOT_FOUND),
  });
  return next();
};
