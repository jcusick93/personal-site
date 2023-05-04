import * as React from "react";
import styled from "styled-components";

export interface TextProps {
  children: React.ReactNode;
}

const TextStyles = styled.span`
  color: ${(props) => props.theme.foregroundNeutral};
  font-size: 16px;
`;

export const Text: React.FC<TextProps> = ({ children }) => {
  return <TextStyles>{children}</TextStyles>;
};
