import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";
import "./canvas.css";
import { FC } from "preact/compat";
const COLORS = [
  "#624E88",
  "#8967B3",
  "#CB80AB",
  "#E6D9A2",
  "#180161",
  "#4F1787",
  "#EB3678",
  "#FB773C",
];

const disteanceCalulate = (currentWidth: number) => {
  const distance = currentWidth / 4;

  return distance > 300 ? 300 : distance < 100 ? 100 : distance;
};

const Canvas: FC<{ parentId: string }> = ({ parentId }) => {
  const dotCanvasRef = useRef<HTMLCanvasElement>(null);
  const lineCanvas = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      disteanceCalulate(window.innerWidth);
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (dotCanvasRef.current && lineCanvas.current) {
      const canvas = dotCanvasRef.current;
      const ctx = canvas.getContext("2d");
      const lineCtx = lineCanvas.current.getContext("2d");
      const { offsetHeight, offsetWidth } = canvas;

      lineCanvas.current.width = offsetWidth;
      lineCanvas.current.height = offsetHeight;
      // Set canvas size explicitly
      canvas.width = offsetWidth;
      canvas.height = offsetHeight;

      let dots: {
        x: number;
        y: number;
        size: number;
        color: string;
      }[] = [];

      for (let i = 0; i <= 50; i++) {
        dots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)], // Ensure within bounds
        });
      }

      // Clear canvas before drawing
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      const poupulateDots = () => {
        dots.forEach((dot) => {
          ctx!.fillStyle = dot.color;
          ctx!.beginPath();
          ctx!.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          ctx!.fill();
        });
      };

      poupulateDots();

      const banner = document.getElementById(parentId);
      const mouseMoveEvent = (event: MouseEvent) => {
        lineCtx?.clearRect(0, 0, canvas.width, canvas.height);

        let mouse = {
          x: event.clientX - banner!.getBoundingClientRect().left,
          y: event.clientY - banner!.getBoundingClientRect().top,
        };

        dots.forEach((dot) => {
          let distance = Math.sqrt(
            (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
          );

          if (distance < disteanceCalulate(size[0])) {
            lineCtx!.strokeStyle = dot.color;
            lineCtx?.beginPath();
            lineCtx!.lineWidth = 1;
            lineCtx!.moveTo(dot.x, dot.y);
            lineCtx!.lineTo(mouse.x, mouse.y);
            lineCtx?.stroke();
          }
        });
      };
      const mouseLeaveEvent = () => {
        lineCtx!.clearRect(0, 0, canvas.width, canvas.height);
      };

      banner?.addEventListener("mousemove", mouseMoveEvent);

      banner?.addEventListener("mouseleave", mouseLeaveEvent);

      return () => {
        banner?.removeEventListener("mousemove", mouseMoveEvent);
        banner?.removeEventListener("mouseleave", mouseLeaveEvent);
      };
    }
  }, [size[0]]);

  return (
    <>
      <canvas
        ref={lineCanvas}
        style={{ zIndex: 0 }}
        class={"dot-canvas"}
      ></canvas>
      <canvas ref={dotCanvasRef} class="dot-canvas"></canvas>
    </>
  );
};

export default Canvas;
