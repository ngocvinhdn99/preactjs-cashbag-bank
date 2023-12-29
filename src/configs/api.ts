export const methods = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
  patch: "PATCH",
};

interface IApi {
  url: string;
  method?: string;
  type?: string;
}

const endpointType = {
  // mainEndpoint: "https://svc.devatcashback.com/api",
  mainEndpoint: "https://vpbank-svc.devatcashback.com/api",
  fakeServer: "http://localhost:4000",
};

const themeColor = {
  get: (): IApi => ({
    url: `/theme-color`,
    method: methods.get,
    type: "fakeServer",
  }),
  getBankTheme: (): IApi => ({
    url: `/bank-theme`,
    method: methods.get,
    type: "fakeServer",
  }),
};

const transaction = {
  getList: (): IApi => ({
    url: `/transaction`,
    method: methods.get,
  }),
};

const withdraw = {
  getList: (): IApi => ({
    url: `/withdraw`,
    method: methods.get,
  }),
};

export default {
  methods,
  endpointType,
  themeColor,
  transaction,
  withdraw,
};
