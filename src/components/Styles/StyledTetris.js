import styled from 'styled-components';

import bgImage from '../../img/bwlfp7b078w0-background.jpg';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage});
  background-size: cover;
  overflow: hidden;
  outline: none;
`

export const StyledTetris = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: center;

  padding: 40px;
  margin: 0 auto;

  max-width: 900px;

  aside {
    width: 100%;
    max-width: 300px;
    display: block;
    padding: 0 20px;
    margin-left: auto;
  }
`

