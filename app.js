import * as THREE from '../../libs/three/three.module.js';
import { OrbitControls } from '../../libs/three/jsm/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );

		this.camera = THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 100);
		this.camera.position.set(0,0,4);

		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(FF0000 );

		this.render = new THREE.WebGLRenderer( { antialising: true});
		this.render.setPixelRatio(window.devicePixelRatio );
		this.render.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( this.render.domElement );

		this.render.setAnimationLoop ( this.render.bind(this) );

        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){
        
    }
    
	render( ) {
		this.render.render(this.scene, this.camera );  
        
    }
}

export { App };