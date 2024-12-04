import styled from "styled-components";
import {Comment} from "./PostList";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgray;
  }
`

const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`

export const CommentListItem = ({ comment }: { comment: Comment }) => {
  return (
    <Wrapper>
      <ContentText>{ comment.content }</ContentText>
    </Wrapper>
  )
}