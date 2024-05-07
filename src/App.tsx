import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useCallback, useMemo, useRef } from "react";

function App() {
  // Create a reference to the canvas element
  const ref = useRef<HTMLCanvasElement>(null);

  // Get scrollYProgress using useScroll hook from framer-motion
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "start start"],
  });

  // Load images into memory using useMemo hook
  const images = useMemo(() => {
    const loadedImages: HTMLImageElement[] = [];

    // Load 86 images into the loadedImages array
    for (let i = 1; i <= 86; i++) {
      const img = new Image();
      img.src = `/images/${i}.webp`;
      loadedImages.push(img);
    }
    return loadedImages;
  }, []);

  // Map scroll progress to current image index
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 86]);

  // Function to render images onto the canvas based on index
  const render = useCallback(
    (index: number) => {
      if (images[index - 1]) {
        ref.current?.getContext("2d")?.drawImage(images[index - 1], 0, 0);
      }
    },
    [images]
  );

  // Update canvas on scroll using useMotionValueEvent
  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  return (
    <div
      style={{
        margin: 0, 
        height: "6000px",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{color: "#fff", fontFamily: "monospace", fontSize:"50px"}}>Video Scroll Animation using Framer Motion</h1>
      <div style={{ height: "2000px" }} />
      {/* Canvas element */}
      <canvas width={1000} height={1000} ref={ref}></canvas>
    </div>
  );
}

export default App;
