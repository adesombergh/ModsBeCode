import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeEditorRoutingModule } from './three-editor-routing.module';
import { ThreeEditorComponent } from './three-editor/three-editor.component';
import { ThreeEditorService } from '@app/three-editor/three-editor.service';

@NgModule({
  imports: [
    CommonModule,
    ThreeEditorRoutingModule
  ],
  declarations: [ThreeEditorComponent],
  exports: [ThreeEditorComponent],
  providers: [ ThreeEditorService ]
})
export class ThreeEditorModule { }
