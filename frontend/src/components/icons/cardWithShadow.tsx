export default function CardWithShadow() {
  return (
    <svg
      width="451"
      height="372"
      viewBox="0 0 451 372"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1199_46598)">
        <rect x="8" y="6" width="435" height="384" rx="10" fill="white" />
        <rect
          x="8.25"
          y="6.25"
          width="434.5"
          height="383.5"
          rx="9.75"
          stroke="#080B0E"
          stroke-width="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1199_46598"
          x="0"
          y="0"
          width="451"
          height="400"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1199_46598"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1199_46598"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
