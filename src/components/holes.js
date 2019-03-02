import React from "react";

import Hole from "./hole";

const holes = [
  { size: 1, position: { x: 12, y: 58 } },
  { size: 2, position: { x: 30, y: 10 } },
  { size: 2, position: { x: 40, y: 60 } },
  { size: 1, position: { x: 33, y: 33 } },
  { size: 3, position: { x: 70, y: 48 } },
  { size: 1, position: { x: 62, y: 18 } },
  { size: 1, position: { x: 72, y: 74 } }
];
export default function Holes() {
  return (
    <div className="holes">
      {holes.map(({ size, position }, index) => (
        <Hole key={`hole-${index}`} size={size} position={position} />
      ))}
    </div>
  );
}
