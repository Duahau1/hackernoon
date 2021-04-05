import styled from "styled-components";
export const Emojibox = styled.div`
  margin-top: 0.5rem;
  color: rgb(246, 247, 249);
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-left: auto;
`;
export const EmojiButton = styled.button`
  border: none;
  background: none;
  text-align: center;
  display: block;
  font-size: 1.8rem;
  margin-right: 0.3rem;
  cursor: pointer;
  outline: none;
  position: relative;
`;
export const LikesDisplay = styled.span`
  margin-right: 0.5rem;
  display: block;
  transform: translateY(-0.25rem);
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  height: 20px;
  font-family: monospace;
`;
export const FloatingIcons = styled.span`
  position: absolute;
  font-size: 0.8rem;
  opacity: 1;
  top:-2rem;
  @keyframes bubbling {
    from {opacity:1;top:-2rem;display:"block";}
    to {opacity:0;top-2.5rem;display:"none";transform:scale(2.4)}
  }
  animation-name: bubbling;
  animation-duration: 2.2s;
  animation-fill-mode: both;

`;
export const FloatingNumber = styled.span`
  position: absolute;
  font-size: 0.8rem;
  opacity: 1;
  top: -1rem;
  left: 0.5rem;
  color: white;
  font-size: 1rem;
`;
