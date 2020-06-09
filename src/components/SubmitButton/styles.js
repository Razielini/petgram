import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00FF;
  border-radius: 3px;
  color: #FFF;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`
