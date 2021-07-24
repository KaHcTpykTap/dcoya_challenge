import styled from "styled-components";

export const FireContainerDeactivate = styled.div`
  .containerAnimation {
    height: 40vh;
    width: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: url(#wavy);

    .containerText {
      height: 35vh;
      width: 35vh;
      background: rgba(0, 142, 255, 0);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: whitesmoke;

      .mainText {
        justify-content: center;
        align-items: flex-end;
        font-size: 8vh;
      }

      .secondaryText {
        height: 10vh;
        width: 10vh;
        justify-content: center;
        align-items: flex-start;
        font-size: 4vh;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

      }
    }
  }

  .containerAnimation::before {
    content: "";
    position: absolute;
    height: 40vh;
    width: 40vh;
    background: rgba(0, 142, 255, 0);
    border-width: 2.5vh;
    border-color: ${props => props.color};
    border-style: solid;
    border-radius: 20vh;
    box-shadow: 0 0 25px ${props => props.color},
    inset 0 0 25px ${props => props.color};
    -webkit-box-reflect: below 10px -webkit-gradient(transparent, transparent, ${props => props.color});

  }



`;

export const FireContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .containerAnimation {
    position: relative;
    height: 40vh;
    width: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: url(#wave) blur(0);
    
    .containerText {
      height: 35vh;
      width: 35vh;
      background: rgba(0, 142, 255, 0);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: whitesmoke;

      .mainText {
        justify-content: center;
        align-items: flex-end;
        font-size: 8vh;
      }

      .secondaryText {
        justify-content: center;
        align-items: flex-start;
        font-size: 4vh;
      }
    }
  }

    .containerAnimation:before {
      content: "";
      position: absolute;
      height: 40vh;
      width: 40vh;
      background: rgba(0, 142, 255, 0);
      border-width: 2.5vh;
        border-color: ${props => props.color};
      border-style: solid;
      border-radius: 20vh;
        box-shadow: 0 0 10vh ${props => props.color},
        inset 0 0 10vh ${props => props.color};
        -webkit-box-reflect: below 10px -webkit-gradient(transparent, transparent, ${props => props.color});
      animation: animate 5s linear infinite;
    }

  .containerAnimation:after {
    content: "";
    position: absolute;
    height: 40vh;
    width: 40vh;
    background: rgba(0, 142, 255, 0);
    border-width: 2.5vh;
      border-color: ${props => props.color};
    border-style: solid;
    border-radius: 20vh;
      box-shadow: 0 0 5vh ${props => props.color},
  }


  @keyframes animate {
    0% {
      box-shadow: 0 0 25px ${props => props.color},
      inset 0 0 25px ${props => props.color};
      filter: hue-rotate(0deg);
    }
    20% {
      box-shadow: 0 0 50px ${props => props.color},
      inset 0 0 50px ${props => props.color};
    }
    40% {
      box-shadow: 0 0 30px ${props => props.color},
      inset 0 0 30px ${props => props.color};
      filter: hue-rotate(60deg);
    }
    80% {
      box-shadow: 0 0 100px ${props => props.color},
      inset 0 0 100px ${props => props.color};
    }
    100% {
      box-shadow: 0 0 25px ${props => props.color},
      inset 0 0 25px ${props => props.color};
      filter: hue-rotate(0deg);
    }
  }
`;

