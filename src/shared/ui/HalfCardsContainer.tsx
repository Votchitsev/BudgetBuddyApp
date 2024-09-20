import styled from "styled-components/native";

interface IProps {
  children: JSX.Element[];
}

const HalfCardsContainer = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};

export default HalfCardsContainer;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;
