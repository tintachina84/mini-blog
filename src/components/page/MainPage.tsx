import styled from "styled-components";
import {Button} from "../ui/Button";
import {useNavigate} from "react-router-dom";
import {PostList} from "../list/PostList";
import data from "../../data.json";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`

export const MainPage = (props: {}) => {
  const navigate = useNavigate()

  return (
      <Wrapper>
        <Container>
          <Button title="글 작성" onClick={() => navigate('/post-write')}/>
          <PostList posts={ data } onClick={ (item) => navigate(`/post/${item.id}`) } />
        </Container>
      </Wrapper>
  )
}