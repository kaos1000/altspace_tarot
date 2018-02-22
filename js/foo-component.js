AFRAME.registerComponent('hello-world', {
    init: function () {
      var root;
      console.log('Hello, World!');
     var sceneEl = document.querySelector('a-scene');
      //sceneEl.querySelector('.tarot_card').setAttribute('rotation', '90 0 0');
      var cards = sceneEl.querySelectorAll('.tarot_card');
      //console.log(cards);
      //var card_obj = document.querySelector('#_2');
      //console.log(card_obj);
     // var new_obj = card_obj.clone();
     // sceneEl.appendChild(card_obj);
      
      for (var i = 0; i < cards.length; i++) {
     // console.log(cards[i]);
       //cards[i].setAttribute('rotation', '-90 0 0');

     }

      
    // console.log(sceneEl);
    /* */ 
    var scene = document.querySelector('a-scene');
    var facedown, single_card;
     for (var i = 0; i < 4; i++) {
      facedown = "";
      facedown = document.createElement('a-plane');
      //facedown.setAttribute('color', '#FF9500');
      /*
      single_card = eval(facedown);
      single_card.addEventListener('mouseenter', function (event) {
        console.log('enter!!!!', event);
        single_card.setAttribute('color', '#FF9500');
       
       
      });
      single_card.addEventListener('mouseleave', function (event) {
        console.log('exit!!!!', event);
        single_card.setAttribute('color', false);
       
      });
      */
      facedown.setAttribute('height', '.5');
      facedown.setAttribute('width', '.25');
      facedown.setAttribute('material', 'side: double;src:#card_back_texture; repeat: 1 1');
      facedown.setAttribute('id', 'card_' + i);
      facedown.setAttribute('rotation', '90 0 -5');
      facedown.setAttribute('position', (i + 1)/5 + ' .9 -1');
      facedown.setAttribute('class', 'fanned_cards');
      
      scene.appendChild(facedown);
      }
      var the_color = '#FF9500';
      var first_card = document.querySelector('#card_0');
      first_card.addEventListener('mouseenter', function (event) {
        //console.log('enter!!!!', event);
        first_card.setAttribute('color', the_color);
       
       
      });
      first_card.addEventListener('mouseleave', function (event) {
        //console.log('enter!!!!', event);
        first_card.setAttribute('color', false);
       
      });
      var second_card = document.querySelector('#card_1');
      second_card.addEventListener('mouseenter', function (event) {
        //console.log('enter!!!!', event);
        second_card.setAttribute('color', the_color);
       
       
      });
      second_card.addEventListener('mouseleave', function (event) {
       // console.log('enter!!!!', event);
        second_card.setAttribute('color', false);
       
      });
      var third_card = document.querySelector('#card_2');
      third_card.addEventListener('mouseenter', function (event) {
       // console.log('enter!!!!', event);
        third_card.setAttribute('color', the_color);
       
       
      });
      third_card.addEventListener('mouseleave', function (event) {
        //console.log('enter!!!!', event);
        third_card.setAttribute('color', false);
       
      });  
      
      var fourth_card = document.querySelector('#card_3');
      fourth_card.addEventListener('mouseenter', function (event) {
        //console.log('enter!!!!', event);
        fourth_card.setAttribute('color', the_color);
       
       
      });
      fourth_card.addEventListener('mouseleave', function (event) {
        //console.log('enter!!!!', event);
        fourth_card.setAttribute('color', false);
       
      });     


    }
  
  });

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
  
  
