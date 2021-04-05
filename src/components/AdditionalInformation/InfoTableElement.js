import styled from "styled-components";
export const Table = styled.div``;
export const TableHeader = styled.div`
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 2em;
  border: 1px solid white;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  border-bottom: unset;
  font-family: monospace;
`;
export const TableRow = styled.div`
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 2em;
  border: 1px solid white;
  text-align: left;
  font-size: 1.4rem;
  font-family: monospace;
`;
export const TableItem = styled.div`
  border-right: 1px solid white;
  padding: 2rem;
  text-align: left;
`;
export const TagSection = styled.h2`
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 2.4rem;
  font-family: monospace;
  margin: 2rem auto;
  :before {
    content: "";
    flex: 1 1 0%;
    border-bottom: 2px solid rgb(194, 202, 214);
    margin: auto;
  }
  :after{
    content: "";
    flex: 1 1 0%;
    border-bottom: 2px solid rgb(194, 202, 214);
    margin: auto;
}
  }
`;
export const BadgesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Badge = styled.div`
  box-shadow: rgb(194 202 214) 0px 0.2em, rgb(194 202 214) 0px -0.2em,
    rgb(194 202 214) 0.2em 0px, rgb(194 202 214) -0.2em 0px;
  padding: 10px;
  margin: 0px 10px 10px 0px;
  line-height: 1em;
  font-size: 1.4rem;
  font-family: monospace;
  cursor: pointer;
  :hover {
    box-shadow: rgb(0, 255, 0) 0px 0.2em, rgb(0, 255, 0) 0px -0.2em,
      rgb(0, 255, 0) 0.2em 0px, rgb(0, 255, 0) -0.2em 0px;
  }
`;
export const SubscribeContainer = styled.div`
  text-align: center;
  font-size: 2.4rem;
  font-family: monospace;
  margin: 2rem auto !important;
`;
export const SubscriberButton = styled.div`
  border: 5px solid rgb(0, 255, 0);
  display: flex;
  align-items: center;
  padding: 0.25em 0.5em;
  font-family: monospace;
  width: fit-content;
  margin: 0 auto !important;
  color 200ms ease 0s;
  :hover{
      transform:scale(1.4);
      background-color:rgb(60,60,59);
  }
`;
export const SubscribeText = styled.p`
  text-align: center;
  font-size: 1.4rem;
  margin: 2rem 0;
`;
export const EndProfileContainer = styled.div`
  text-align: center;
  font-size: 2.4rem;
  font-family: monospace;
  margin: 2rem auto !important;
  width: 80%;
`;
export const EndprofileBox = styled.div`
  box-shadow: rgb(0, 255, 0) 0px 0.2em, rgb(0, 255, 0) 0px -0.2em,
    rgb(0, 255, 0) 0.2em 0px, rgb(0, 255, 0) -0.2em 0px;
  padding: 10px;
  margin: 0px 10px 10px 0px;
  line-height: 1em;
  font-size: 1.5rem;
  font-family: monospace;
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding: 3rem;
`;
export const EndprofileParagraph = styled.div`
  font-size: 1.5rem;
`;
