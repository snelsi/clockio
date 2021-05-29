import React from "react";
import { Group } from "react-konva";
import Clock from "./Clock";

const Left = 180;
const Right = 0;
const Top = -90;
const Bottom = 90;

const TR = [Top, Right];
const TB = [Top, Bottom];
const LT = [Left, Top];
const LB = [Left, Bottom];
const LR = [Left, Right];
const BR = [Bottom, Right];
const __ = [135, 135];

const numToAngles = (num: number) => {
  switch (num) {
    case 0:
      return [
        [BR, LR, LR, LB],
        [TB, BR, LB, TB],
        [TB, TB, TB, TB],
        [TB, TB, TB, TB],
        [TB, TR, LT, TB],
        [TR, LR, LR, LT],
      ];
    case 1:
      return [
        [BR, LR, LB, __],
        [TR, LB, TB, __],
        [__, TB, TB, __],
        [__, TB, TB, __],
        [BR, LT, TR, LB],
        [TR, LR, LR, LT],
      ];
    case 2:
      return [
        [BR, LR, LR, LB],
        [TR, LR, LB, TB],
        [BR, LR, LT, TB],
        [TB, BR, LR, LT],
        [TB, TR, LR, LB],
        [TR, LR, LR, LT],
      ];
    case 3:
      return [
        [BR, LR, LR, LB],
        [TR, LR, LB, TB],
        [BR, LR, LT, TB],
        [TR, LR, LB, TB],
        [BR, LR, LT, TB],
        [TR, LR, LR, LT],
      ];
    case 4:
      return [
        [BR, LB, BR, LB],
        [TB, TB, TB, TB],
        [TB, TR, LT, TB],
        [TR, LR, LB, TB],
        [__, __, TB, TB],
        [__, __, TR, LT],
      ];
    case 5:
      return [
        [BR, LR, LR, LB],
        [TB, BR, LR, LT],
        [TB, TR, LR, LB],
        [TR, LR, LB, TB],
        [BR, LR, LT, TB],
        [TR, LR, LR, LT],
      ];
    case 6:
      return [
        [BR, LR, LR, LB],
        [TB, BR, LR, LT],
        [TB, TR, LR, LB],
        [TB, BR, LB, TB],
        [TB, TR, LT, TB],
        [TR, LR, LR, LT],
      ];
    case 7:
      return [
        [BR, LR, LR, LB],
        [TR, LR, LB, TB],
        [__, __, TB, TB],
        [__, __, TB, TB],
        [__, __, TB, TB],
        [__, __, TR, LT],
      ];
    case 8:
      return [
        [BR, LR, LR, LB],
        [TB, BR, LB, TB],
        [TB, TR, LT, TB],
        [TB, BR, LB, TB],
        [TB, TR, LT, TB],
        [TR, LR, LR, LT],
      ];
    case 9:
      return [
        [BR, LR, LR, LB],
        [TB, BR, LB, TB],
        [TB, TR, LT, TB],
        [TR, LR, LB, TB],
        [BR, LR, LT, TB],
        [TR, LR, LR, LT],
      ];
    default:
      return [
        [__, __, __, __],
        [__, __, __, __],
        [__, __, __, __],
        [__, __, __, __],
        [__, __, __, __],
        [__, __, __, __],
      ];
  }
};

interface NumProps {
  num: number;
  radius?: number;
  x?: number;
  y?: number;
}
const Num: React.FC<NumProps> = ({ num, radius = 100, x = 0, y = 0 }) => {
  const cells = React.useMemo(() => numToAngles(num), [num]);

  return (
    <Group x={x} y={y}>
      {cells.map((row, i) =>
        row.map((angle, j) => (
          <Clock
            x={radius + radius * 2 * j}
            y={radius + radius * 2 * i}
            radius={radius}
            angle={angle}
            key={`${i}-${j}`}
          />
        ))
      )}
    </Group>
  );
};

export default Num;
