import styled from "styled-components";

export const WaveContainer = styled.div`
  .animeDiv {
    //background-image: linear-gradient(45deg, pink, hotpink);
    display: flex;
    height: 100vh;
    place-items: center;
    
  }

  
  .animeDiv::before {
    animation: anim 30s infinite;
    background: rgba(0, 142, 255, 0);
    //background-image: linear-gradient(135deg, red, blue);
    border-radius: 30% 70% 53% 47% / 26% 46% 54% 74%;
    box-shadow: 0 -2vmin 3vmin red inset, 0 1vmin 4vmin red inset,
      0 -2vmin 7vmin red inset;
    content: "";
    filter: drop-shadow(0 0 3vmin Thistle) drop-shadow(0 5vmin 4vmin Orchid) drop-shadow(2vmin -2vmin 15vmin MediumSlateBlue) drop-shadow(0 0 7vmin MediumOrchid);
    height: 50vmin;
    width: 50vmin;
  }

  @keyframes anim {
    0%,
    100% {
      border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
      box-shadow: 0 -2vmin 3vmin LightPink inset, 0 1vmin 4vmin MediumPurple inset,
        0 -2vmin 7vmin purple inset;
    }

    10% {
      border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
    }

    20% {
      border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
    }

    30% {
      border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;
      box-shadow: -1vmin -2vmin 3vmin LightPink inset,
        -1vmin -2vmin 4vmin MediumPurple inset, 1vmin -1vmin 7vmin purple inset;
    }

    40% {
      border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
    }

    50% {
      border-radius: 100%;
      box-shadow: 0 2vmin 3vmin LightPink inset, 0 1vmin 4vmin MediumPurple inset,
      0 2vmin 7vmin purple inset;
    }

    60% {
      border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
    }

    70% {
      border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
      box-shadow: 1vmin 1vmin 4vmin LightPink inset,
        2vmin -1vmin 4vmin MediumPurple inset, -1vmin -1vmin 5vmin purple inset;
    }

    80% {
      border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
    }

    90% {
      border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
    }
  }
`;