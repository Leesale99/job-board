import styled from 'styled-components';

const Main = styled.main`
  grid-area: main;
  grid-column: ${props => (props.fluid ? '1 / -1' : '1fr')};
  width: 100%;
  height: ${props =>
    props.withSearchBar ? 'calc(100vh - 21.3rem)' : 'calc(100vh - 13rem)'};
`;

export default Main;
