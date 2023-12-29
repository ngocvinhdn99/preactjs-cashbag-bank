import { ApiConst } from "src/configs";
import { request } from "src/utils";

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
