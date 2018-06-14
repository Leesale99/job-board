import styled from 'styled-components';

const Input = styled.input`
  display: block;
  line-height: 1.5;
  width: 100%;
  border-radius: 0;
  color: ${({ theme }) => theme.getColor('placeholderText')};
  background: none;
  border: 1px solid ${({ theme }) => theme.getColor('borderColor')};
  font-weight: normal;
  padding: 1.2rem;
  font-size: 16px;

  &:focus {
    border-color: #218fe6;
  }
`;

export default Input;
