import {type CreateExpressContextOptions} from '@trpc/server/adapters/express';

// created for each request
export const createContext = ({
  req,
  res,
}: CreateExpressContextOptions) => ({
  foo: true,
}); // no context

