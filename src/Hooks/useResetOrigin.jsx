import React from "react";
import * as THREE from "three";

const useResetOrigin = ref => {
	console.log(ref);
	try {
		let box = new THREE.Box3().setFromObject(ref);
		box.center(ref.position); // this re-sets the mesh position
		mesh.position.multiplyScalar(-1);
	} catch (err) {
		console.log("could not reset bounding box -", err);
	}
};

export default useResetOrigin;
