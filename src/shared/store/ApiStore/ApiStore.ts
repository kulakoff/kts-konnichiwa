import {
  ApiResponse,
  IApiStore,
  RequestParams,
  StatusHTTP,
  HTTPMethod,
} from "./types";
const qs = require("qs");
// import qs from "qs";


export default class ApiStore implements IApiStore {
  //   readonly baseUrl: string;
  constructor(public readonly baseUrl: string) {
    // TODO: Примите из параметров конструктора baseUrl
    // и присвойте его в this.baseUrl
    this.baseUrl = baseUrl;
  }

  private getRequestData<ReqT>(
    params: RequestParams<ReqT>
  ): [string, RequestInit] {
    let endpoint = `${this.baseUrl}${params.endpoint}`;
    let req: RequestInit = {
      method: params.method,
      headers: { ...params.headers },
    };

    // let body = null;
    // let headers = { ...params.headers };
    if (params.method === HTTPMethod.GET) {
      endpoint = `${endpoint}?${qs.stringify(params.data)}`;
    }

    if (params.method === HTTPMethod.POST) {
      req.body = JSON.stringify(params.data);
      req.headers = {
        ...req.headers,
        "Content-Type": "application/json;charset=utf-8",
      };
    }

    return [endpoint, req];
  }

  async request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>> {
    // const requestStr: string = qs.stringify(params.data);
    // TODO: Напишите здесь код, который с помощью fetch будет делать запрос
    try {
      const [endpoint, req] = this.getRequestData(params);
      const response = await fetch(endpoint, req);

      if (response.ok) {
        return {
          success: true,
          data: await response.json(),
          status: response.status,
        };
      }

      return {
        success: false,
        data: await response.json(),
        status: response.status,
      };
    } catch (error) {
      return {
        success: false,
        data: error,
        status: StatusHTTP.UNEXPECTED_ERROR,
      };
    }
  }
}
