/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
// import { ApiConst, AppConst } from "@/configs";
import { route } from "preact-router";
import { ApiConst, AppConst } from "../configs";

export interface RequestOptions {
  method?: string;
  query?: string;
  body?: any;
  file?: any;
  files?: File[] | File;
  requiredToken?: boolean;
  name?: string;
  title?: string;
  type?: string;
  apiKey?: string;
}
async function parseJSON(response: Response) {
  const jsonData = await response.json();

  // Handle 401- Unauthorized
  if (response.status && response.status === 401) {
    if (jsonData.code !== 53) {
      // Redirect to login page
      localStorage.removeItem(AppConst.localStorage.authToken);
      route("/login");
    }
  }

  return {
    ...jsonData,
    status: response?.status,
    success: response?.status < 400,
  };
}

function serializeObject(obj: any) {
  const str: string[] = [];
  for (const p in obj) {
    if (typeof obj[p] === "object" && obj[p].length) {
      for (const i in obj[p]) {
        if (Object.prototype.hasOwnProperty.call(obj[p], i)) {
          str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p][i])}`);
        }
      }
    } else if (typeof obj[p] === "object") {
      // eslint-disable-next-line no-restricted-syntax
      for (const k in obj[p]) {
        if (Object.prototype.hasOwnProperty.call(obj[p], k)) {
          str.push(
            `${encodeURIComponent(p)}[${k}]=${encodeURIComponent(obj[p][k])}`
          );
        }
      }
    } else {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  }

  return str.join("&");
}

function processOptions(options: any, type?: string) {
  if (!options.headers) {
    options.headers = {};
    if (!options.file && !options.files) {
      const language = "vi";
      options.headers = {
        "Content-Type": "application/json",
        "Accept-Language": language,
      };
    }
  }

  // Process send data
  if (options.method === ApiConst.methods.get) {
    options.query = serializeObject(options.body);
    options.body = undefined;
    delete options.body;
  } else {
    options.bodyData = options.body;
  }
  if (!options.file && !options.files) {
    options.body = JSON.stringify(options.bodyData);
  } else {
    options.body = new FormData();
    options.file && options.body.append("file", options.file);
    options.files && options.body.append("files", options.files);
    if (type === "chatUploadEndPoint") {
      options.body.append("payload", JSON.stringify(options.bodyData));
    }
    options.body.append("data", JSON.stringify(options.bodyData));
    options?.name && options.body.append("name", options.name);
    options?.title && options.body.append("title", options.title);
    options?.type && options.body.append("type", options.type);
  }

  const token = localStorage.getItem(AppConst.localStorage.authToken);

  const deviceId = localStorage.getItem(AppConst.localStorage.deviceId);

  if (deviceId) {
    if (type === "chatUploadEndPoint") {
      options.headers[`DeviceId`] = deviceId;
    } else {
      options.headers[`Device-ID`] = deviceId;
    }
  }

  if (type === "chatEndPoint") {
    options.headers["X-Token"] = "ewogICAgInVzZXJUeXBlIjogInN0YWZmIgp9";
  }

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  if (options.apiKey) {
    options.headers["Api-Key"] = options.apiKey;
  }

  return options;
}

/**
 * Request to server
 *
 * @param url request url
 * @param options contain method or query
 * @param type request type
 */
const call = async (
  url: string,
  options: RequestOptions,
  type: string = "mainEndpoint"
) => {
  url = ApiConst.endpointType[type] + url;

  if (!options.method) {
    options.method = ApiConst.methods.get;
  }
  options = processOptions(options, type);
  if (options.query) {
    url += `?${options.query}`;
  }

  try {
    const response = await fetch(url, options);
    const data = await parseJSON(response);
    return { data };
  } catch (err) {
    return { err };
  }
};

export default {
  call,
};
