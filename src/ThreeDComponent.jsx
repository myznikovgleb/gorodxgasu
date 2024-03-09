import * as THREE from 'three';
import React, { useEffect } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const My3DModel = () => {

  
    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      const loader = new FBXLoader();
      loader.load('3dnode.fbx', (object) => {
        scene.add(object);
      });
  
      camera.position.z = 5;
  
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
  
      animate();
  
      return () => {
        document.body.removeChild(renderer.domElement);
      };
    }, []);
  
    return null;
  };
  
  export default My3DModel;

