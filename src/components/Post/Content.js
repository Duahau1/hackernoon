import React from "react";
import { PostContainer, PostUltimateContainer } from "./PostElement";
import UserProfile from "./Profile";
import BlogPost from "./BlogSection";
const PostContent = ({ theme }) => {
  return (
    <PostUltimateContainer style={{ theme }.theme}>
      <PostContainer style={{ theme }.theme}>
        <UserProfile theme={{ theme }.theme.color} />
        <BlogPost theme={{ theme }.theme.color} />
      </PostContainer>
    </PostUltimateContainer>
  );
};
export default PostContent;
