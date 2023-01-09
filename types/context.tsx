import { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";

export type Context<T> = {
  convertedResponse: T;
  convertedTagResponse: T;
  TodoID: number;
};

export type Args = {
  req: NextApiRequest;
  res: NextApiResponse;
  query: ParsedUrlQuery;
};
