import { ApiConst } from "src/configs";
import { request } from "src/utils";

const get = (query) => {
  const api = ApiConst.themeColor.get();
  return request.call(
    api.url,
    {
      method: api.method,
      body: query,
    },
    api.type
  );
};

const getBankTheme = (query) => {
  const api = ApiConst.themeColor.getBankTheme();
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
  get,
  getBankTheme,
};
