import React from "react";
import styled from "@emotion/styled";
import { getHours, getMinutes } from "date-fns";
import { Stage, Group, Layer } from "react-konva";
import useWindowDimensions from "./useWindowDimensions";
import useCustomCursor from "./useCustomCursor";
import GitHubLink from "./GitHubLink";
import Actions from "./Actions";
import useTime from "./useTime";
import Num from "./Num";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & canvas {
    max-width: 100%;
    width: 100%;
  }
`;

const App: React.FC = () => {
  const currentTime = useTime(1000);
  const { height, width } = useWindowDimensions();
  useCustomCursor();

  const isDesktop = width > 720;

  const cellSize = isDesktop
    ? Math.min(width / (4 * 4), height / 6)
    : Math.min(width / (4 * 2), height / (6 * 2));
  const radius = cellSize / 2;

  const hours = getHours(currentTime);
  const minutes = getMinutes(currentTime);

  return (
    <Wrapper>
      <Stage
        width={cellSize * 4 * (isDesktop ? 4 : 2)}
        height={cellSize * 6 * (isDesktop ? 1 : 2)}
      >
        <Layer>
          <Group>
            <Num num={Math.floor(hours / 10)} radius={radius} />
            <Num num={hours % 10} radius={radius} x={cellSize * 4} />
          </Group>
          <Group
            x={isDesktop ? cellSize * 8 : 0}
            y={isDesktop ? 0 : cellSize * 6}
          >
            <Num num={Math.floor(minutes / 10)} radius={radius} />
            <Num num={minutes % 10} radius={radius} x={cellSize * 4} />
          </Group>
        </Layer>
      </Stage>

      <Actions>
        <GitHubLink />
      </Actions>
    </Wrapper>
  );
};

export default App;
