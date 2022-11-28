import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";

const vertexShader = /* glsl */ `
  varying vec3 vNormal;

  void main() {
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
  }
`;

// fragmentShader: `
//     varying vec2 vUv;
//     uniform float u_time;
//     varying vec3 vPosition;
//     // varying float u;
//     // varying float v;
//     varying vec3 position;

//     void main() {
//         // vec2 uv = vUv;
//         // vec2 uv = vPosition.xz;
//         vec3 position = normalize(vPosition);
//         float u = atan(position.z, position.x) / (2.0*3.14159265) + 0.5;
//         float v = position.y * 0.5 + 0.5;
//         vec2 uv = vec2( u , v );

//     vec2 p[4];
//     p[0] = vec2(0.1, 0.9);
//     p[1] = vec2(0.9, 0.9);
//     p[2] = vec2(0.5, 0.1);
//     p[3] = vec2(cos(u_time), sin(u_time)) * 0.4 + vec2(0.5, 0.5);

//     vec3 c[4];
//     c[0] = vec3(0.451,0.882,0.976);
//     c[1] = vec3(0.153,0.365,0.961);
//     c[2] = vec3(0.976,0.188,0.812);
//     c[3] = vec3(0.941,0.431,0.118);

//     float blend = 4.0;

//     // calc IDW (Inverse Distance Weight) interpolation

//     float w[4];
//     vec3 sum = vec3(0.0);
//     float valence = 0.0;
//     for (int i = 0; i < 4; i++) {
//         float distance = length(uv - p[i]);
//         if (distance == 0.0) { distance = 1.0; }
//         float w =  1.0 / pow(distance, blend);
//         sum += w * c[i];
//         valence += w;
//     }
//     sum /= valence;

//     // apply gamma 2.2 (Approx. of linear => sRGB conversion. To make perceptually linear gradient)

//     sum = pow(sum, vec3(1.0/1.3));

//     // output

//     gl_FragColor = vec4(sum.xyz, 1.0);
//     // #include <encodings_fragment>;
//     }
//   `,

const fragmentShader = /* glsl */ `
  varying vec3 vNormal;
  uniform float uTime;

  #define PI 3.14159
  #define TWO_PI (2.0 * PI)

  // https://stackoverflow.com/questions/9600801/evenly-distributing-n-points-on-a-sphere/26127012#26127012
  vec3 getDirection(float i, float sampleCount){
    float y = 1.0 - (i / sampleCount) * 2.0;
    //Radius at y
    float radius = sqrt(1.0 - y * y);  

    float phi = PI * (3.0 - sqrt(5.0));
    //Golden angle increment
    float theta = phi * i;

    float x = cos(theta) * radius;
    float z = sin(theta) * radius;

    return normalize(vec3(x, y, z));
  }

  // https://iquilezles.org/articles/palettes/
  vec3 getColour(float t){
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = 1.0 - a;
    vec3 c = vec3(1.0,1.0,1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    
    return pow(a + b * cos(TWO_PI * (c * t + d)), vec3(2.2));
  }

  void main() {
    vec3 col = vec3(0);
        
    // Input to get a colour in a gradient map
    // Animate it in time
    float c = 0.02 * uTime;

    // Number of colours
    float numTones = 32.0;

    // How much around the sphere each colour should extend
    // Smaller values extend farther
    float size = 10.0;
    
    // Range of colours
    float gradientScale = 10.0;

    for(float tone = 0.0; tone < numTones; tone++) {
      // Get a uniformly distributed direction on the sphere
      vec3 randomDir = getDirection(tone, numTones);
      // How much the current sphere normal faces the random direction 
      float d = 0.5 + 0.5 * dot(normalize(vNormal), randomDir);
      // Mix the new colour in with the previous ones
      col = mix(col, getColour(gradientScale * c), clamp(pow(d, size), 0.0, 1.0));
      // Shift the lookup of the gradient for the next iteration
      c += tone / numTones;
    }

    // Write to screen
    gl_FragColor = vec4(col, 1.0);

    // Three color management
    #include <encodings_fragment>
  }
`;

function ShaderSphere(props) {
	const uniforms = React.useRef({ uTime: { value: 0 } });
	const size = useRef(props.size);
	useFrame(state => (uniforms.current.uTime.value = state.clock.elapsedTime));

	return (
		<mesh {...props}>
			<sphereGeometry args={[size.current, 24, 24]} />
			<shaderMaterial
				roughness="0"
				metalness="1"
				uniforms={uniforms.current}
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
			/>
			<OrbitControls />
		</mesh>
	);
}

const Balls = () => {
	return (
		<div>
			<Canvas className="">
				<directionalLight args={["#ffffff", 1]} />
				<ShaderSphere size={0.1} />
			</Canvas>
		</div>
	);
};

export default Balls;
