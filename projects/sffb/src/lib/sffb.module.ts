import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { UploaderComponent } from './uploader.component';
import { CommonModule } from '@angular/common';


export interface FirebaseStorageConfig {
  abc: boolean;
}
export const FIREBASE_STORAGE_CONFIG = new InjectionToken<FirebaseStorageConfig>('FIREBASE_STORAGE_CONFIG');


@NgModule({
  imports: [CommonModule],
  exports: [UploaderComponent],
  declarations: [UploaderComponent],
  entryComponents: [UploaderComponent],
})
export class SFFBModule {
  private static configure(config: FirebaseStorageConfig): ModuleWithProviders {
  return {
      ngModule: SFFBModule,
      providers: [{ provide: FIREBASE_STORAGE_CONFIG, useValue: config }],
  };
}}
