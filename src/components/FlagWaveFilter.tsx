/** SVG cloth-wave filter — used by hero pennant (index_6 #flagwave). */
export function FlagWaveFilter() {
  return (
    <svg
      width="0"
      height="0"
      className="pointer-events-none absolute"
      aria-hidden
    >
      <defs>
        <filter id="flagwave" x="-6%" y="-6%" width="112%" height="112%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.022"
            numOctaves={2}
            seed={5}
            result="turb"
          >
            <animate
              attributeName="baseFrequency"
              values="0.008 0.022;0.012 0.028;0.009 0.024;0.008 0.022"
              dur="11s"
              calcMode="spline"
              keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="turb"
            scale={8}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
