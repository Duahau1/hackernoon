import styled from "styled-components";
export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: rgb(33, 36, 40);
  font-family: monospace;
  padding-top: 1rem;
  width: 80%;
  margin: 0 auto;
`;
export const UserProfileContainer = styled.div`
  padding: 1rem;
  max-width: 200px;
  display: inline-block;
`;
export const UserProfileAvatar = styled.img`
  max-width: 75px;
  width: 50px;
  object-fit: cover;
  box-shadow: rgb(194 202 214) 0px 0.2em, rgb(194 202 214) 0px -0.2em,
    rgb(194 202 214) 0.2em 0px, rgb(194 202 214) -0.2em 0px;
`;
export const UserProfileParagraph = styled.p`
  font-size: 1.4rem;
  color: rgb(246, 247, 249);
  margin-bottom: 0.5rem;
  font-family: monospace;
`;
export const BlogPostContainer = styled.div`
  padding: 1rem;
  flex-grow: 2;
`;
export const ParagraphContainer = styled.div`
  font-size: 1.3rem;
  color: rgb(246, 247, 249);
  font-family: monospace;
  display: flex;
  justify-conten: space-between;
  align-items: center;
  padding: 1rem;
`;
export const Separator = styled.span`
  background: rgba(0, 0, 0, 0.1);
  width: 10px;
  height: 6px;
  margin: 1px 0px;
  background-color: rgb(234, 234, 234);
  margin-right: 1.5rem;
`;
export const WordLine = styled.span`
  font-family: monospace;
  line-height: 2.5rem;
`;
export const PostUltimateContainer = styled.div`
  background: rgb(33, 36, 40);
  @media only screen and (max-width: 1000px) {
    ${PostContainer} {
      flex-direction: column;
    }
  }
`;
export const ShareStories = styled.div``;
