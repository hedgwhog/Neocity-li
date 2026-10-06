import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function LightningIcon() {
  const ref = useRef(null);

useEffect(() => {
  if (!ref.current) return;

  ref.current.innerHTML = "";

  const scene = new THREE.Scene();

  const camera = new THREE.OrthographicCamera(
    -1.2,
    1.2,
    1.2,
    -1.2,
    0.1,
    10
  );
  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.setSize(140, 140);

  ref.current.appendChild(renderer.domElement);

  const group = new THREE.Group();
  scene.add(group);

  const radius = 0.65;

  const createBolt = (angle) => {
    const jitter = () => (Math.random() - 0.5) * 0.18;

    return new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0),
      new THREE.Vector3(
        Math.cos(angle) * (radius + 0.25) + jitter(),
        Math.sin(angle) * (radius + 0.25) + jitter(),
        0
      ),
      new THREE.Vector3(
        Math.cos(angle + 0.25) * radius + jitter(),
        Math.sin(angle + 0.25) * radius + jitter(),
        0
      ),
    ]);
  };

  const material = new THREE.LineBasicMaterial({
    color: 0x00ffff,
    transparent: true,
  });

  const bolts = [];

  for (let i = 0; i < 14; i++) {
    const geo = createBolt((i / 14) * Math.PI * 2);

    const line = new THREE.Line(geo, material);

    group.add(line);
    bolts.push(line);
  }

  let frame;

  const animate = () => {
    frame = requestAnimationFrame(animate);

    group.rotation.z += 0.01;

    bolts.forEach((b) => {
      b.material.opacity = 0.3 + Math.random() * 0.7;
    });

    renderer.render(scene, camera);
  };

  animate();

  return () => {
    cancelAnimationFrame(frame);

    bolts.forEach((b) => {
      b.geometry.dispose();
    });

    material.dispose();
    renderer.dispose();

    if (ref.current && renderer.domElement) {
      ref.current.removeChild(renderer.domElement);
    }
  };
}, []);

  return <div className="lightning-icon" ref={ref} />;
}