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
  mainEndpoint: "https://admin-api.unibag.xyz",
  fakeServer: "http://localhost:4000",
};

const themeColor = {
  get: (): IApi => ({
    url: `/theme-color`,
    method: methods.get,
    type: 'fakeServer',
  }),
  getBankTheme: (): IApi => ({
    url: `/bank-theme`,
    method: methods.get,
    type: 'fakeServer',
  }),
};

export default {
  methods,
  endpointType,
  themeColor,
};
