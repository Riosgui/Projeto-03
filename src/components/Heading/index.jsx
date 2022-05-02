import * as Styled from './style';
import P from 'prop-types';

export const Heading = ({ children }) => {
  return <Styled.Title>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
};
