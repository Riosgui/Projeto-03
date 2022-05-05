import styled from 'styled-components';
import { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.size.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.size.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.size.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.size.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.medium} {
    font-size: ${theme.font.size.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark == false ? theme.white : theme.primaryColor};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;
