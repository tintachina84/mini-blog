import styled from "styled-components";
import {CommentListItem} from "./CommentListItem";
import {Comment} from "./PostList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`

export const CommentList= ({comments}: {
  comments: Comment[]
}) => {
  return (
      <Wrapper>
        {comments.map((comment, index) =>
            <CommentListItem key={comment.id} comment={comment}/>)}
      </Wrapper>
  )
}