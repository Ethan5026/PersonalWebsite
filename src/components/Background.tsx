import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    toX: number;
    toY: number;
    c: string;
    size: number;
}

interface MousePosition {
    x: number;
    y: number;
}

export default function Background(){
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const w = window.innerWidth;
    const h = window.innerHeight;
    const rate = 60;
    const arc = 100;
    const size = 7;
    const speed = 20;
    const parts: Particle[] = new Array(arc);
    const colors: string[] = ['red', '#f57900', 'yellow', '#ce5c00', '#5c3566'];
    const mouse: MousePosition = { x: 0, y: 0 };

    useEffect(() => {
        let time = 0;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (!canvas || !ctx) return;

        canvas.width = w;
        canvas.height = h;

        const create = () => {
            for (let i = 0; i < arc; i++) {
                parts[i] = {
                    x: Math.ceil(Math.random() * w),
                    y: Math.ceil(Math.random() * h),
                    toX: Math.random() * 5 - 1,
                    toY: Math.random() * 2 - 1,
                    c: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * size,
                };
            }
        };

        const particles = () => {
            ctx.clearRect(0, 0, w, h);
            canvas.addEventListener('mousemove', MouseMove, false);

            for (let i = 0; i < arc; i++) {
                const li = parts[i];
                let distanceFactor = DistanceBetween(mouse, parts[i]);
                distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);

                ctx.beginPath();
                ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
                ctx.fillStyle = li.c;
                ctx.strokeStyle = li.c;

                if (i % 2 === 0) {
                    ctx.stroke();
                } else {
                    ctx.fill();
                }

                li.x += li.toX * (time * 0.05);
                li.y += li.toY * (time * 0.05);

                if (li.x > w) li.x = 0;
                if (li.y > h) li.y = 0;
                if (li.x < 0) li.x = w;
                if (li.y < 0) li.y = h;
            }

            if (time < speed) {
                time++;
            }

            setTimeout(particles, 1000 / rate);
        };

        function MouseMove(e: MouseEvent): void {
            mouse.x = e.offsetX;
            mouse.y = e.offsetY;
        }

        const DistanceBetween = (p1: MousePosition, p2: Particle): number => {
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            return Math.sqrt(dx * dx + dy * dy);
        };

        create();
        particles();
    }, [w, h]);

    return <canvas ref={canvasRef} id="test" />
};
