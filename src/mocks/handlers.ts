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
];
