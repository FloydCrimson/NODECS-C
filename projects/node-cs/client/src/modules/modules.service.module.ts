import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ModulesServiceConfig, ModulesService } from '../services/modules.service';

@NgModule({
    imports: [
        HttpClientModule
    ]
})
export class ModulesServiceModule {

    constructor(
        @Optional() @SkipSelf() parentModule?: ModulesServiceModule
    ) {
        if (parentModule) {
            throw new Error('"ModulesServiceModule" is already loaded. Import it in the AppModule only.');
        }
    }

    public static forRoot(config?: ModulesServiceConfig): ModuleWithProviders<ModulesServiceModule> {
        return {
            ngModule: ModulesServiceModule,
            providers: [
                { provide: ModulesServiceConfig, useValue: config },
                ModulesService
            ]
        };
    }

}
