document.getElementById('addMod').addEventListener('click', function () {
  var loader = new THREE.ObjectLoader();
  loader.load( // load a resource
    '../assets/MODs.json', // resource URL
    function (obj) { // onCompleted callback
      editor.execute(new AddObjectCommand(obj));
    },
    function (xhr) { // onProgress callback
      // console.log();
    },
    function (err) { // onError callback
      console.log('An error happened');
    }
  );
})

// Save the MODs into the DB
document.querySelector('#saveStructure').addEventListener('click', function (e) {

  var sceneObjects = editor.scene.children;
  // Removing the parent & geometry property of the object
  let mesh = sceneObjects.map((obj) => {
    var threeObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // && key != 'matrix' && key != 'matrixWorld'
        if (key != 'parent' && key != 'geometry' && key != 'castShadow' && key != 'matrixAutoUpdate' && key != 'matrixWorldNeedsUpdate' && key != 'material' && key != 'layers' && key != 'frustumCulled' && key != 'name' && key != 'quartenion' && key != 'receiveShadow' && key != 'renderOrder' && key != 'uuid' && key != 'type' && key != 'up' && key != 'scale' && key != 'drawMode' && key != 'visible') {
          threeObj[key] = obj[key];
        }
      }
    }
    return threeObj
  })

  mesh = JSON.parse(JSON.stringify(mesh))
  // console.log(mesh);
  superObject = {
    meshes: mesh
  };
  // console.log(superArray);
  var xhr = new XMLHttpRequest();

  xhr.open("POST", 'http://localhost:3000/user/5aa06472b8b87d00fc17df8a/projects', true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onreadystatechange = function () { //Call a function when the state changes.
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      // Request finished. Do processing here.
    }
  }
  xhr.send(JSON.stringify(superObject));
});

// Fetch the MODs from the DB
document.querySelector('#fetchStructure').addEventListener('click', function () {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", 'http://localhost:3000/projects/5ad1d9be392cb93d9caa9270', true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onreadystatechange = function () { //Call a function when the state changes.
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      // Request finished. Do processing here.

      // 1. Parsing the requested project so that we can access its properties
      var resProject = JSON.parse(this.responseText);

      // 2. Accessing the meshes
      var meshes = resProject.project.meshes
      console.log(meshes);

      // 4. Adding the meshes to the scene
      var scene = editor.scene
      var sceneObjects = editor.scene.children
      console.log('scene before while', scene);
      // 4.1 Clearing the scene
      while (sceneObjects.length > 0) {
        scene.remove(sceneObjects[0]);
      }
      console.log('scene cleared', sceneObjects);

      // 4.3 Setting the scene objects equal to the retrieved meshes
      sceneObjects = meshes
      console.log('Scene objects', sceneObjects);

      console.log('Scene before merge', scene.children);

      // 4.5 retrieving the model
      var loader = new THREE.ObjectLoader();
      loader.load( // load a resource
        '../assets/MODs.json', // resource URL
        function (obj) { // onCompleted callback
          console.log('retrieving local mod', obj);
          /* POSITION */

          // var finalArray = [];
          for (var i = 0; i < sceneObjects.length; i++) {
            for (const iterator of ["position", "rotation", "quaternion", "matrix", "matrixWorld"]) {
              for (const key in sceneObjects[i][iterator]) {
                // console.log(sceneObjects[i][iterator][key]);
                obj[iterator][key] = sceneObjects[i][iterator][key];
                obj.parent = scene;
                obj.name = "Module MODs";
                obj.type = "Mesh";
              }
            }
            scene.children.push(obj);
            console.log('scene after load', scene.children);
            // finalArray.push(obj);
          }
          // console.log('final array of objects', finalArray);
          // scene.children = finalArray;
          console.log('scene childrens after final merge', scene.children);
          console.log('final scene', scene);
        },
        function (xhr) { // onProgress callback
          // console.log();
        },
        function (err) { // onError callback
          console.log('An error happened');
        }
      );
    }
  }
  xhr.send();

});

// Fetch the MODs from the DB
document.querySelector('#fetchAllStructures').addEventListener('click', function () {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", 'http://localhost:3000/projects/', true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onreadystatechange = function () { //Call a function when the state changes.
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      // Request finished. Do processing here.

      // 1. Parsing the requested project so that we can access its properties
      var resProject = JSON.parse(this.responseText);
      console.log('resProject', resProject);
      // 2. Accessing the meshes
      // var meshes = resProject.projects[0].meshes
      // console.log(meshes);

      // 4. Adding the meshes to the scene
      // var scene = editor.scene
      // var sceneObjects = editor.scene.children
      // console.log('scene before while', scene);
      // // 4.1 Clearing the scene
      // while (sceneObjects.length > 0) {
      //   scene.remove(sceneObjects[0]);
      // }
      // console.log('scene cleared', sceneObjects);

      // 4.3 Setting the scene objects equal to the retrieved meshes
      // sceneObjects = meshes
      // console.log('Scene objects', sceneObjects);

      // console.log('Scene before merge', scene.children);

      // // 4.5 retrieving the model
      // var loader = new THREE.ObjectLoader();
      // loader.load( // load a resource
      //   '../assets/MODs.json', // resource URL
      //   function (obj) { // onCompleted callback
      //     console.log('retrieving local mod', obj);
      //     /* POSITION */

      //     // var finalArray = [];
      //     for (var i = 0; i < sceneObjects.length; i++) {
      //       for (const iterator of ["position", "rotation", "quaternion", "matrix", "matrixWorld"]) {
      //         for (const key in sceneObjects[i][iterator]) {
      //           // console.log(sceneObjects[i][iterator][key]);
      //           obj[iterator][key] = sceneObjects[i][iterator][key];
      //           obj.parent = scene;
      //           obj.name = "Module MODs";
      //           obj.type = "Mesh";
      //         }
      //       }
      //       scene.children.push(obj);
      //       console.log('scene after load', scene.children);
      //       // finalArray.push(obj);
      //     }
      //     // console.log('final array of objects', finalArray);
      //     // scene.children = finalArray;
      //     console.log('scene childrens after final merge', scene.children);
      //     console.log('final scene', scene);
      //   },
      //   function (xhr) { // onProgress callback
      //     // console.log();
      //   },
      //   function (err) { // onError callback
      //     console.log('An error happened');
      //   }
      // );
    }
  }
  xhr.send();

});

var menuHiders = document.getElementsByClassName('hideMenu');
for (var i = 0; i < menuHiders.length; i++) {
  menuHiders[i].addEventListener('click', function (e) {
    e.preventDefault;
    document.querySelector(this.dataset.toggle).classList.toggle('hidden');
  });
}
document.querySelector('#rotate').addEventListener('click', function (e) {
  editor.signals.transformModeChanged.dispatch('rotate');
  document.querySelector('#move').classList.toggle('hide');
  document.querySelector('#rotate').classList.toggle('hide');
});
document.querySelector('#move').addEventListener('click', function (e) {
  editor.signals.transformModeChanged.dispatch('translate');
  document.querySelector('#move').classList.toggle('hide');
  document.querySelector('#rotate').classList.toggle('hide');
});
document.querySelector('#delete').addEventListener('click', function (e) {
  var object = editor.selected;
  // if ( confirm( 'Delete ' + object.name + '?' ) === false ) return;
  var parent = object.parent;
  if (parent === undefined) return; // avoid deleting the camera or scene
  editor.execute(new RemoveObjectCommand(object));
});
document.querySelector('#clone').addEventListener('click', function (e) {
  var object = editor.selected;
  if (object.parent === null) return; // avoid cloning the camera or scene
  object = object.clone();
  editor.execute(new AddObjectCommand(object));
});
