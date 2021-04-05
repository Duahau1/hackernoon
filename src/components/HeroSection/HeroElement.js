import styled from "styled-components";
export const HeroP1 = styled.div`
  margin-top: 2rem;
  color: rgb(246, 247, 249);
  font-size: 1.2rem;
  padding: 4px 0px;
  text-align: left;
  margin-left: 1.2rem;
`;
export const HeroP2 = styled(HeroP1)``;
export const HeroContainer = styled.div`
  background: rgb(33, 36, 40);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
`;

export const HeroContent = styled.div`
  z-index: 3;
  padding: 8 24px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;

export const HeroH1 = styled.h1`
  color: rgb(246, 247, 249);
  font-size: 1.75rem;
  text-align: center;
  line-height: 1.4;
  margin: 0.67em 0px;
  font-family: "IBMPlexMono", monospace;
  src: local("IBMPlexMono"),
    url("../Fonts/IBMPlexMono-Medium.ttf") format("truetype");
`;
export const HeroSubHeader = styled.div`
  display: flex;
  justify-content: "space-between";
  align-items: center;
`;
export const HeroStarBox = styled.div`
  margin-top: 2rem;
  color: rgb(246, 247, 249);
  font-size: 1.2rem;
  margin-left: 1.2rem;
  padding: 4px 10px;
  border: solid black 1px;
  background: rgb(60, 60, 59);
  display: flex;
  align-items: center;
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LandingImages = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s ease 0s;
`;
