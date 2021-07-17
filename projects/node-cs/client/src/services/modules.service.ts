import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModulesImplementation } from '../implementations/modules.implementation';

export class ModulesServiceConfig {
  /** Endpoint of @node-cs/server. */
  endpoint = 'http://localhost:7010';
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
      const params = args ? { args: JSON.stringify([...args]) } : undefined;
      return this.http.get<any>(url, { observe: 'response', responseType: 'json', params }).toPromise().then((response) => {
        if (response.body?.args) {
          return JSON.parse(response.body.args);
        }
      }).catch((error) => {
        throw error;
      })
    };
  }

}
