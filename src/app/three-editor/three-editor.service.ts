import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ThreeEditorService implements OnInit {

  constructor() { }

  public loadLink(linkUrl: string) {
    return new Promise((resolve, reject) => {
      const linkElement = document.createElement('link');
      linkElement.href = linkUrl;
      linkElement.rel = 'stylesheet';
      linkElement.type = 'text/css';
      linkElement.onload = resolve;
      document.body.appendChild(linkElement);
    })
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    })
  }

  async ngOnInit() {
    await this.loadLink('../../assets/editor/js/libs/codemirror/codemirror.css');
    await this.loadLink('../../assets/editor/js/libs/codemirror/addon/dialog.css');
    await this.loadLink('../../assets/editor/js/libs/codemirror/addon/show-hint.css');
    await this.loadLink('../../assets/editor/js/libs/codemirror/addon/tern.css');
    await this.loadLink('../../assets/editor/js/libs/codemirror/theme/monokai.css');
    await this.loadLink('../../assets/editor/css/main.css');
    await this.loadLink('../../assets/editor/css/dark.css');
    await this.loadLink('../../assets/editor/css/menus.css');
    await this.loadLink('../../assets/editor/css/reset.css');
    await this.loadLink('https://fonts.googleapis.com/css?family=Montserrat:300');

    // Scripts
    await this.loadScript('../../assets/build/three.js');
    await this.loadScript('../../assets/editor/deba.js');
    await this.loadScript('../../assets/editor/js/anarhistory.js');
    await this.loadScript('../../assets/editor/js/anarscene.js');
    await this.loadScript('../../assets/examples/js/libs/system.min.js');

    await this.loadScript('../../assets/examples/js/controls/EditorControls.js');
    await this.loadScript('../../assets/examples/js/controls/TransformControls.js');

    // await this.loadScript('../../assets/examples/js/libs/jszip.min.js');
    // await this.loadScript('../../assets/examples/js/libs/inflate.min.js');

    await this.loadScript('../../assets/examples/js/loaders/AMFLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/AWDLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/BabylonLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/ColladaLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/FBXLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/GLTFLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/KMZLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/MD2Loader.js');
    await this.loadScript('../../assets/examples/js/loaders/OBJLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/MTLLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/PlayCanvasLoader.js');
    // await this.loadScript('../../assets/examples/js/loaders/PLYLoader.js');
    // await this.loadScript('../../assets/examples/js/loaders/STLLoader.js');
    // await this.loadScript('../../assets/examples/js/loaders/TGALoader.js');
    // await this.loadScript('../../assets/examples/js/loaders/TDSLoader.js');
    // await this.loadScript('../../assets/examples/js/loaders/UTF8Loader.js');
    // await this.loadScript('../../assets/examples/js/loaders/VRMLLoader.js');
    // await this.loadScript('../../assets/examples/js/loaders/VTKLoader.js');
    // await this.loadScript('../../assets/examples/js/loaders/ctm/lzma.js');
    // await this.loadScript('../../assets/examples/js/loaders/ctm/ctm.js');
    // await this.loadScript('../../assets/examples/js/loaders/ctm/CTMLoader.js');
    await this.loadScript('../../assets/examples/js/exporters/OBJExporter.js');
    await this.loadScript('../../assets/examples/js/exporters/GLTFExporter.js');
    await this.loadScript('../../assets/examples/js/exporters/STLExporter.js');

    await this.loadScript('../../assets/examples/js/renderers/Projector.js');
    await this.loadScript('../../assets/examples/js/renderers/CanvasRenderer.js');
    await this.loadScript('../../assets/examples/js/renderers/RaytracingRenderer.js');
    await this.loadScript('../../assets/examples/js/renderers/SoftwareRenderer.js');
    await this.loadScript('../../assets/examples/js/renderers/SVGRenderer.js');

    // await this.loadScript('../../assets/editor/js/libs/codemirror/codemirror.js');
    // await this.loadScript('../../assets/editor/js/libs/codemirror/mode/javascript.js');
    // await this.loadScript('../../assets/editor/js/libs/codemirror/mode/glsl.js');

    // await this.loadScript('../../assets/editor/js/libs/esprima.js');
    // await this.loadScript('../../assets/editor/js/libs/jsonlint.js');
    // await this.loadScript('../../assets/editor/js/libs/glslprep.min.js');

    // await this.loadScript('../../assets/editor/js/libs/codemirror/addon/dialog.js');
    // await this.loadScript('../../assets/editor/js/libs/codemirror/addon/show-hint.js');
    // await this.loadScript('../../assets/editor/js/libs/codemirror/addon/tern.js');
    // await this.loadScript('../../assets/editor/js/libs/acorn/acorn.js');
    // await this.loadScript('../../assets/editor/js/libs/acorn/acorn_loose.js');
    // await this.loadScript('../../assets/editor/js/libs/acorn/walk.js');
    // await this.loadScript('../../assets/editor/js/libs/ternjs/polyfill.js');
    await this.loadScript('../../assets/editor/js/libs/ternjs/signal.js');
    await this.loadScript('../../assets/editor/js/libs/ternjs/tern.js');
    await this.loadScript('../../assets/editor/js/libs/ternjs/def.js');
    await this.loadScript('../../assets/editor/js/libs/ternjs/comment.js');
    await this.loadScript('../../assets/editor/js/libs/ternjs/infer.js');
    await this.loadScript('../../assets/editor/js/libs/ternjs/doc_comment.js');
    await this.loadScript('../../assets/editor/js/libs/tern-threejs/threejs.js');

    await this.loadScript('../../assets/editor/js/libs/signals.min.js');
    await this.loadScript('../../assets/editor/js/libs/ui.js');
    await this.loadScript('../../assets/editor/js/libs/ui.three.js');

    // await this.loadScript('../../assets/editor/js/libs/app.js');
    // await this.loadScript('../../assets/editor/js/Player.js');
    // await this.loadScript('../../assets/editor/js/Script.js');

    await this.loadScript('../../assets/examples/js/vr/WebVR.js');

    await this.loadScript('../../assets/editor/js/Storage.js');

    await this.loadScript('../../assets/editor/js/Editor.js');
    await this.loadScript('../../assets/editor/js/Config.js');
    await this.loadScript('../../assets/editor/js/History.js');
    await this.loadScript('../../assets/editor/js/Loader.js');
    await this.loadScript('../../assets/editor/js/Menubar.js');
    await this.loadScript('../../assets/editor/js/Menubar.File.js');
    await this.loadScript('../../assets/editor/js/Menubar.Edit.js');
    await this.loadScript('../../assets/editor/js/Menubar.Add.js');
    await this.loadScript('../../assets/editor/js/Menubar.Play.js');
    await this.loadScript('../../assets/editor/js/Menubar.Examples.js');
    await this.loadScript('../../assets/editor/js/Menubar.Help.js');
    await this.loadScript('../../assets/editor/js/Menubar.Status.js');
    await this.loadScript('../../assets/editor/js/Sidebar.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Scene.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Project.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Settings.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Settings.Shortcuts.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Properties.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Object.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.Geometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.BufferGeometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.Modifiers.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.BoxGeometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.CircleGeometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.CylinderGeometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.IcosahedronGeometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.PlaneGeometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.SphereGeometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.TorusGeometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.TorusKnotGeometry.js');
    await this.loadScript('../../assets/examples/js/geometries/TeapotBufferGeometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.TeapotBufferGeometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Geometry.LatheGeometry.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Material.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Animation.js');
    await this.loadScript('../../assets/editor/js/Sidebar.Script.js');
    await this.loadScript('../../assets/editor/js/Sidebar.History.js');
    await this.loadScript('../../assets/editor/js/Toolbar.js');
    await this.loadScript('../../assets/editor/js/Viewport.js');
    await this.loadScript('../../assets/editor/js/Viewport.Info.js');

    await this.loadScript('../../assets/editor/js/Command.js');
    await this.loadScript('../../assets/editor/js/commands/AddObjectCommand.js');
    await this.loadScript('../../assets/editor/js/commands/RemoveObjectCommand.js');
    await this.loadScript('../../assets/editor/js/commands/MoveObjectCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetPositionCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetRotationCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetScaleCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetValueCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetUuidCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetColorCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetGeometryCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetGeometryValueCommand.js');
    await this.loadScript('../../assets/editor/js/commands/MultiCmdsCommand.js');
    await this.loadScript('../../assets/editor/js/commands/AddScriptCommand.js');
    await this.loadScript('../../assets/editor/js/commands/RemoveScriptCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetScriptValueCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetMaterialCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetMaterialValueCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetMaterialColorCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetMaterialMapCommand.js');
    await this.loadScript('../../assets/editor/js/commands/SetSceneCommand.js');

    await this.loadScript('../../assets/editor/js/libs/html2canvas.js');
    await this.loadScript('../../assets/editor/js/libs/three.html.js');
    await this.loadScript('../../assets/editor/js/myEditor.js');
  }

  // async ngAfterViewInit() {



  // }


}
