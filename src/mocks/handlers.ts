import { rest } from 'msw';
import { apiUrl } from '../config';

export default [
  rest.get(apiUrl + '/sanctum', (_, res, ctx) => {
    return res(
      ctx.json({
        message: 'it works!',
      })
    );
  }),
  rest.post(apiUrl + '/login', (_, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        message: 'Successfully logged in',
      })
    );
  }),
];
