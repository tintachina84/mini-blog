import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useState} from "react";
import {TextInput} from "../ui/TextInput";
import {Button} from "../ui/Button";

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

export const PostWritePage = (props: {}) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <Wrapper>
            <Container>
                <TextInput height={ 20 } value={ title } onChange={ (event: ChangeEvent<HTMLTextAreaElement>) => setTitle(event.target.value) } />
                <TextInput height={ 480 } value={ content } onChange={ (event: ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value) } />
                <Button onClick={ () => navigate('/') } />
            </Container>
        </Wrapper>
    )
}