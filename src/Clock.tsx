import React from "react";
import { Group, Circle, Line } from "react-konva";
import { useSpring } from "react-spring";

const degToRadians = (degrees: number) => (degrees * Math.PI) / 180;

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
}) => {
  const radians = React.useMemo(() => angle.map(degToRadians), [angle]);
  const animatedProps = useSpring({
    angle: radians,
  });

  const angles = animatedProps.angle.get();

  return (
    <Group>
      <Circle x={x} y={y} radius={radius} stroke={stroke} />
      {angles.map((radians, i) => (
        <Line
          x={x}
          y={y}
          points={[
            0,
            0,
            radius * Math.cos(radians),
            radius * Math.sin(radians),
          ]}
          stroke={line}
          key={i}
        />
      ))}
    </Group>
  );
};

export default Clock;
