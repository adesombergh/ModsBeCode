import { Component, OnInit } from '@angular/core';
import { ThreeEditorService } from '../three-editor.service';

@Component({
  selector: 'anms-three-editor',
  templateUrl: './three-editor.component.html',
  styleUrls: ['./three-editor.component.scss']
})
export class ThreeEditorComponent implements OnInit {

  constructor(public threeEditor: ThreeEditorService) {
    this.threeEditor.ngOnInit()
  }

  ngOnInit() {
  }

}
