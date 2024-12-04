import styled from "styled-components";
import {PostListItem} from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`

export interface Comment {
  id: number;
  content: string;
}

export interface Post {
  id: number
  title: string
  content: string
  comments: Comment[]
}

export const PostList = ({posts, onClick}: {
  posts: Post[]
  onClick: (post: Post) => void
}) => {
  return (
      <Wrapper>
        {posts.map((post, index) =>
            <PostListItem key={post.id} post={post} onClick={() => onClick(post)}/>)}
      </Wrapper>
  )
}