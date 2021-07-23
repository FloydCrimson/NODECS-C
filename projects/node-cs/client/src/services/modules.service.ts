import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModulesImplementation } from '../implementations/modules.implementation';

export class ModulesServiceConfig {
  /** Endpoint of @node-cs/server. */
  endpoint = 'http://localhost:7010';
  /** Method of the requests. */
  method: 'get' | 'post' = 'post';
}

@Injectable()
export class ModulesService {

  constructor(
    private readonly http: HttpClient,
    @Optional() private readonly config: ModulesServiceConfig = new ModulesServiceConfig()
  ) { }

  public getMethod<M1 extends keyof ModulesImplementation, M2 extends keyof ModulesImplementation[M1]>(module: M1, method: M2): (...args: ModulesImplementation[M1][M2] extends (...args: infer I) => Promise<any> ? I : []) => ModulesImplementation[M1][M2] extends (...args: any) => Promise<infer O> ? Promise<O> : Promise<unknown> {
    const url = `${this.config.endpoint}/${module}/${method}`;
    return (...args: ModulesImplementation[M1][M2] extends (...args: infer I) => Promise<any> ? I : []): ModulesImplementation[M1][M2] extends (...args: any) => Promise<infer O> ? Promise<O> : Promise<unknown> => {
      switch (this.config.method) {
        case 'get': return this.get(url, args);
        case 'post': return this.post(url, args);
        default: throw new Error(`Method "${this.config.method}" not recognized.`);
      }
    };
  }

  //

  private get(url: string, args: any[]): Promise<any> {
    const params = args ? { args: JSON.stringify([...args]) } : undefined;
    return this.http.get<any>(url, { observe: 'response', responseType: 'json', params }).toPromise().then((response) => {
      if (response.body?.args) {
        return JSON.parse(response.body.args);
      }
    }).catch((error) => {
      throw error;
    })
  }

  private post(url: string, args: any[]): Promise<any> {
    const params = args ? { args: [...args] } : undefined;
    return this.http.post<any>(url, { observe: 'response', responseType: 'json', params }).toPromise().then((response) => {
      return response?.args;
    }).catch((error) => {
      throw error;
    })
  }

}
