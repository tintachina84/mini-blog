import styled from "styled-components";
import {ChangeEventHandler} from "react";

interface StyledButtonProps {
  height?: number // $ prefix를 사용하여 DOM에 전달되지 않는 prop임을 명시
}

const StyledTextArea = styled.textarea<StyledButtonProps>`
  width: calc(100% - 32px);
  ${(props) => props.height && `height: ${props.height}px;`}
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`

interface TextInputProps {
  height?: number
  value?: string
  onChange: ChangeEventHandler<HTMLTextAreaElement> | undefined
}

export const TextInput = ({ height, value, onChange }: TextInputProps) => {
  return <StyledTextArea height={height} value={value} onChange={onChange} />
}