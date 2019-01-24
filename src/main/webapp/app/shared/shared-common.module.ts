import { NgModule } from '@angular/core';

import { GcmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GcmSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GcmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GcmSharedCommonModule {}
