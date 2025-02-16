"use client";

import createGlobe from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "../../../lib/utlis";

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 1,
  theta: 0.5,
  dark: 4,
  diffuse: 0.2,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.2, 0.1, 0.3], // Purple base color
  markerColor: [0.9,0.2,0.7], // Keep markers as is
  glowColor: [0.6, 0.3, 1], // Light purple glow color
  markers: [
    { location: [14.5995, 120.9842], size: 0.0001 },
    // { location: [19.076, 72.8777], size: 0.2 },
    // { location: [23.8103, 90.4125], size: 0.09 },
    // { location: [30.0444, 31.2357], size: 0.09 },
    // { location: [39.9042, 116.4074], size: 0.11 },
    // { location: [-23.5505, -46.6333], size: 0.14 },
    // { location: [19.4326, -99.1332], size: 0.13 },
    // { location: [40.7128, -74.006], size: 0.17 },
    // { location: [34.6937, 135.5022], size: 0.09 },
    // { location: [41.0082, 28.9784], size: 0.06 },
  ],
};


export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);


  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state) => {
      if (!pointerInteracting.current) phi += 0.01;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
      />
    </div>
  );
}
