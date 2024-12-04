import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`

interface ButtonProps {
  title?: string
  onClick: () => void
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return <StyledButton onClick={ onClick }>{ title || 'Button' }</StyledButton>
}