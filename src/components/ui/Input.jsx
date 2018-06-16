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
  padding: ${({ small }) => (small ? '0.7rem' : '1.2rem')};
  font-size: ${({ small }) => (small ? '1.4rem' : '1.6rem')};

  &:focus {
    border-color: #218fe6;
  }
`;

export default Input;
