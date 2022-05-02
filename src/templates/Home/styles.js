import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, fontSize, transform }) =>
    css`
      background: ${theme.secondaryBg};
      font-size: ${fontSize};
      transform: ${transform};
    `}
`;
