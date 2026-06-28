"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Configuration
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    const noise = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Spread particles in a large cube
      positions[i] = (Math.random() - 0.5) * 160;     // X
      positions[i + 1] = (Math.random() - 0.5) * 160; // Y
      positions[i + 2] = (Math.random() - 0.5) * 100; // Z
      
      speeds[i / 3] = 0.05 + Math.random() * 0.15;
      noise[i / 3] = Math.random() * 10;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Create a circular particle texture dynamically using Canvas
    const createCircleTexture = () => {
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 16;
      pCanvas.height = 16;
      const ctx = pCanvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "rgba(0, 242, 254, 1)");
        gradient.addColorStop(0.3, "rgba(0, 242, 254, 0.8)");
        gradient.addColorStop(0.6, "rgba(157, 78, 221, 0.4)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(pCanvas);
    };

    const material = new THREE.PointsMaterial({
      size: 1.5,
      map: createCircleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Grid System Helper (Stark style wireframe background)
    const gridHelper = new THREE.GridHelper(160, 40, 0x00f2fe, 0x00f2fe);
    gridHelper.position.y = -40;
    gridHelper.material.opacity = 0.04;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Mouse interactive coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Window resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;
      
      // Floating animation: update position attributes
      const positionAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
      const arr = positionAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        // Slowly float upward (y-axis)
        arr[idx + 1] += speeds[i];
        
        // Add a gentle horizontal sine wave wiggle
        arr[idx] += Math.sin(time + noise[i]) * 0.03;
        
        // If particle floats off screen, reset to bottom
        if (arr[idx + 1] > 80) {
          arr[idx + 1] = -80;
          arr[idx] = (Math.random() - 0.5) * 160;
        }
      }
      
      positionAttr.needsUpdate = true;

      // Gentle auto-rotation
      particles.rotation.y = time * 0.05;

      // Mouse Parallax interpolation (lerp)
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particles.position.x = targetX * 15;
      particles.position.y = -targetY * 15;
      gridHelper.position.x = targetX * 10;
      gridHelper.rotation.y = targetX * 0.1;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none bg-cyber-obsidian"
    />
  );
}
