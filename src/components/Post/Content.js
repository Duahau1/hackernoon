import React from "react";
import { PostContainer, PostUltimateContainer } from "./PostElement";
import UserProfile from "./Profile";
import BlogPost from "./BlogSection";
const PostContent = () => {
  return (
    <PostUltimateContainer>
      <PostContainer>
        <UserProfile />
        <BlogPost />
      </PostContainer>
    </PostUltimateContainer>
  );
};
export default PostContent;
