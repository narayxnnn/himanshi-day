'use client';

import { useEffect, useRef } from 'react';

export default function SakuraCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const numPetals = 50;
    let petals = [];
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Petal {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 2 - canvas.height;
        this.w = 25 + Math.random() * 15;
        this.h = 20 + Math.random() * 10;
        this.opacity = this.w / 40;
        this.flip = Math.random();
        this.xSpeed = 1.5 + Math.random() * 2;
        this.ySpeed = 1 + Math.random() * 1;
        this.flipSpeed = Math.random() * 0.03;
      }
      draw() {
        if (this.y > canvas.height || this.x > canvas.width) {
          this.x = -this.w;
          this.y = Math.random() * canvas.height * 2 - canvas.height;
          this.xSpeed = 1.5 + Math.random() * 2;
          this.ySpeed = 1 + Math.random() * 1;
          this.flip = Math.random();
        }
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x + this.w / 2, this.y - this.h / 2, this.x + this.w, this.y, this.x + this.w / 2, this.y + this.h / 2);
        ctx.bezierCurveTo(this.x, this.y + this.h, this.x - this.w / 2, this.y, this.x, this.y);
        ctx.closePath();
        ctx.fillStyle = '#FFB7C5';
        ctx.fill();
      }
      update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.flip += this.flipSpeed;
        this.draw();
      }
    }

    petals = Array.from({ length: numPetals }, () => new Petal());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach((p) => p.update());
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="sakura-canvas" ref={ref} />;
}
