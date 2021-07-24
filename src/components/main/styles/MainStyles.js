
import styled from "styled-components";

export const MainContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 100%;

  .divCount {
    height: 15vh;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background: rgba(0, 142, 255, 0);

    .divCounter {
      height: 5vh;
      width: 5vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 25vw;
      border-radius: 2vh;
      color: whitesmoke;
      font-size: 3vh;
      font-weight: bold;
    }
  }
  .divAnimation {
    height: 65vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;