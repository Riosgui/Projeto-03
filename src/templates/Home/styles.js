import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ fontSize, transform }) =>
    css`
      font-size: ${fontSize};
      transform: ${transform};
    `}
`;
