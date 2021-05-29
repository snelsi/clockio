import styled from "@emotion/styled";

const Actions = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  position: absolute;

  z-index: 2;

  right: 20px;
  top: 20px;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-right: 16px;
  }

  & > a,
  & > button {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    opacity: 0.5;
    transition: opacity 0.2s ease;
    width: 28px;
    height: 28px;

    & > img {
      width: 24px;
      height: 24px;
    }

    &:focus,
    &:active {
      opacity: 1;
    }
    &:focus:not(:focus-visible) {
      opacity: 0.5;
    }
    @media (hover: hover) {
      &:hover {
        opacity: 1 !important;
      }
    }
  }
`;

export default Actions;
