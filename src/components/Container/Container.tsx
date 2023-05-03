import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  padding: 32px;
  margin: 0 auto;
`;

export interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return <StyledContainer style={style}>{children}</StyledContainer>;
};
