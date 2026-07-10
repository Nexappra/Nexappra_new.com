import { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  IcosahedronGeometry,
  WireframeGeometry,
  LineSegments,
  LineBasicMaterial,
  Points,
  PointsMaterial,
  BufferGeometry,
  Float32BufferAttribute,
} from "three";

export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    /* ---- Sizes ---- */
    let width = container.clientWidth;
    let height = container.clientHeight;

    /* ---- Scene / Camera / Renderer ---- */
    const scene = new Scene();
    const camera = new PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    /* Cap pixel ratio for performance — 1.5 on mobile, 2 on desktop */
    const isMobile = window.innerWidth <= 768;
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2),
    );
    container.appendChild(renderer.domElement);

    /* ---- Wireframe sphere ---- */
    const icoGeo = new IcosahedronGeometry(2, 1);
    const wireGeo = new WireframeGeometry(icoGeo);
    const wireMat = new LineBasicMaterial({
      color: 0x4ade80,
      transparent: true,
      opacity: 0.35,
    });
    const wireframe = new LineSegments(wireGeo, wireMat);
    scene.add(wireframe);

    /* ---- Particles (reduced for performance) ---- */
    const particleCount = isMobile ? 200 : 350;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Random point inside a sphere of radius 4
      const r = 4 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new Float32BufferAttribute(positions, 3),
    );
    const particleMat = new PointsMaterial({
      color: 0x4ade80,
      size: 0.025,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new Points(particleGeo, particleMat);
    scene.add(particles);

    /* ---- Mouse tracking ---- */
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    /* ---- Resize handler ---- */
    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    /* ---- Visibility-based render loop ---- */
    let frameId;
    let isVisible = true;

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0 },
    );
    visibilityObserver.observe(container);

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      /* Skip rendering when off-screen */
      if (!isVisible) return;

      // Ambient rotation
      wireframe.rotation.x += 0.001;
      wireframe.rotation.y += 0.002;
      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0005;

      // Mouse tilt (smooth lerp)
      const targetX = mouse.y * 0.3;
      const targetY = mouse.x * 0.3;
      wireframe.rotation.x += (targetX - wireframe.rotation.x) * 0.02;
      wireframe.rotation.y += (targetY - wireframe.rotation.y) * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    /* ---- Cleanup ---- */
    return () => {
      cancelAnimationFrame(frameId);
      visibilityObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      wireGeo.dispose();
      icoGeo.dispose();
      wireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", minHeight: "300px" }}
      aria-hidden="true"
    />
  );
}
