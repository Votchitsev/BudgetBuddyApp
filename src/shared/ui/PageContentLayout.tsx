import { colors } from "@shared/style";
import styled from "styled-components/native";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const PageContentLayout = ({ children }: IProps) => {
  return <Scroll>{children}</Scroll>;
};

export default PageContentLayout;

const Scroll = styled.ScrollView`
  padding-top: 60px;
  background-color: ${colors.main};
  padding-left: 5%;
  padding-right: 5%;
`;
