import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ThreeEditorComponent} from '../three-editor/three-editor/three-editor.component';
import { ThreeEditorService } from '@app/three-editor/three-editor.service';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [AboutComponent, FeaturesComponent, ThreeEditorComponent, StepperComponent],
  providers: [ThreeEditorService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class StaticModule {}
