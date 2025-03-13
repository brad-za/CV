import React from "react";
import * as THREE from "three";

const useResetOrigin = (ref: THREE.Object3D): void => {
  console.log(ref);
  try {
    const box = new THREE.Box3().setFromObject(ref);
    const center = new THREE.Vector3();
    box.getCenter(center);
    ref.position.sub(center); // this re-sets the mesh position
    ref.position.multiplyScalar(-1); // Fixed: using ref instead of undefined mesh
  } catch (err) {
    console.log("could not reset bounding box -", err);
  }
};

export default useResetOrigin;
