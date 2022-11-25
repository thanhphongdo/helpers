import Axios, { AxiosResponse } from 'axios';
const https = require('https');

export class BaseAxios {
    headers: any;
    baseUrl: string;
    agent = new https.Agent({  
        rejectUnauthorized: false
      });
    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl || '';
        this.headers = {};
    }
    get<T>(url: string, headers?: any): Promise<AxiosResponse<T>> {
        return Axios.get(this.baseUrl + url, { headers: headers || this.headers, httpsAgent: this.agent }).then((data: AxiosResponse<T>) => {
            return data;
        }).catch(err => {
            return this.handleError(err);
        });
    }

    post<T>(url: string, params: any, headers?: any): Promise<AxiosResponse<T>> {
        return Axios.post(this.baseUrl + url, params || {}, { headers: headers || this.headers }).then((data: AxiosResponse<T>) => {
            return data;
        }).catch(err => {
            return this.handleError(err);
        });
    }

    put<T>(url: string, params: any, headers?: any): Promise<AxiosResponse<T>> {
        return Axios.post(this.baseUrl + url, params || {}, { headers: headers || this.headers }).then((data: AxiosResponse<T>) => {
            return data;
        }).catch(err => {
            return this.handleError(err);
        });
    }

    delete<T>(url: string, params: any, headers?: any): Promise<AxiosResponse<T>> {
        return Axios.post(this.baseUrl + url, params || {}, { headers: headers || this.headers }).then((data: AxiosResponse<T>) => {
            return data;
        }).catch(err => {
            return this.handleError(err);
        });
    }

    handleError(err: any) {
        return Promise.reject(err);
    }
}
