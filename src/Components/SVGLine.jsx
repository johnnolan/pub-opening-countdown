import React from "react";

const SVGLine = ({ radius }) => (
  <svg className="countdown-svg">
    <line x1="0" y1="0" x2={radius} y2="0" stroke="#333" stroke-width="20" />
    Sorry, your browser does not support inline SVG.
  </svg>
);

export default SVGLine;
