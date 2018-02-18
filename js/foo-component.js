AFRAME.registerComponent('hello-world', {
    init: function () {
      var root;
      console.log('Hello, World!');
     // var sceneEl = document.querySelector('a-scene');
      //sceneEl.querySelector('.tarot_card').setAttribute('rotation', '90 0 0');
      //var cards = sceneEl.querySelectorAll('.tarot_card');
      //console.log(cards);
      //var card_obj = document.querySelector('#_2');
      //console.log(card_obj);
     // var new_obj = card_obj.clone();
     // sceneEl.appendChild(card_obj);
      
      //for (var i = 0; i < cards.length; i++) {
       // console.log(cards[i]);
       // cards[i].setAttribute('rotation', '90 0 0');

     // }

      
    // console.log(sceneEl);
    /*
    var scene = document.querySelector('a-scene');
    var cylinder;
     for (var i = 0; i < 4; i++) {
      cylinder = document.createElement('a-cylinder');
      cylinder.setAttribute('color', '#FF9500');
      cylinder.setAttribute('height', '1');
      cylinder.setAttribute('radius', '0.25');
      cylinder.setAttribute('position', i + ' 1 0');
      scene.appendChild(cylinder);
      }

    }
  });
*/
  AFRAME.registerComponent('box', {
    schema: {
      width: {type: 'number', default: 1},
      height: {type: 'number', default: 1},
      depth: {type: 'number', default: 1},
      color: {type: 'color', default: '#AAA'}
    },
    init: function () {
      var data = this.data;
      var el = this.el;
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
      this.material = new THREE.MeshStandardMaterial({color: data.color});
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      el.setObject3D('mesh', this.mesh);
    },
    /**
     * Update the mesh in response to property updates.
     */
    update: function (oldData) {
      var data = this.data;
      var el = this.el;
      // If `oldData` is empty, then this means we're in the initialization process.
      // No need to update.
      if (Object.keys(oldData).length === 0) { return; }
      // Geometry-related properties changed. Update the geometry.
      if (data.width !== oldData.width ||
          data.height !== oldData.height ||
          data.depth !== oldData.depth) {
        el.getObject3D('mesh').geometry = new THREE.BoxBufferGeometry(data.width, data.height,
                                                                      data.depth);
      }
      // Material-related properties changed. Update the material.
      if (data.color !== oldData.color) {
        el.getObject3D('mesh').material.color = data.color;
      }
    }
  });
  
  