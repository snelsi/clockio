import React from "react";
import { Group, Circle, Line } from "react-konva";

interface ClockLineProps {
  x?: number;
  y?: number;
  radius?: number;
  angle?: number;
  stroke?: string;
}
const ClockLine: React.FC<ClockLineProps> = ({
  x = 100,
  y = 100,
  radius = 50,
  angle = 0,
  stroke = "#fff",
}) => {
  const lineRef = React.useRef(null);

  React.useEffect(() => {
    lineRef.current?.to?.({
      rotation: angle,
    });
  }, [angle]);

  return (
    <Line
      x={x}
      y={y}
      stroke={stroke}
      ref={lineRef}
      points={[0, 0, radius, 0]}
    />
  );
};

interface ClockProps {
  x?: number;
  y?: number;
  radius?: number;
  angle?: number[];
  stroke?: string;
  line?: string;
}
const Clock: React.FC<ClockProps> = ({
  x = 100,
  y = 100,
  radius = 50,
  angle = [135, 135],
  stroke = "rgba(255, 255, 255, 0.25)",
  line = "#fff",
}) => (
  <Group>
    <Circle x={x} y={y} radius={radius} stroke={stroke} />
    {angle.map((radians, i) => (
      <ClockLine
        x={x}
        y={y}
        radius={radius}
        angle={radians}
        stroke={line}
        key={i}
      />
    ))}
  </Group>
);

export default Clock;
