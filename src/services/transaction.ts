import { ApiConst } from "../configs";
import { request } from "../utils";

const getList = (query) => {
  const api = ApiConst.transaction.getList();
  return request.call(
    api.url,
    {
      method: api.method,
      body: query,
    },
    api.type
  );
};

export default {
  getList,
};
