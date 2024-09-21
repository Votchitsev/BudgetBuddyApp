import React from "react";
import styled from "styled-components/native";
import { colors } from "@shared/style";

interface IProps extends React.ComponentProps<typeof Card> {
  title: string;
  value: string;
}

const FullCard = ({ title, value, ...props }: IProps) => {
  return (
    <Card {...props}>
      <Title>{title}</Title>
      <Value>{value} ₽</Value>
    </Card>
  );
};

export default FullCard;

const Card = styled.TouchableOpacity`
  background-color: ${colors.secondaryRGBA};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 15px;
  padding-left: 25px;
`;

const Title = styled.Text`
  color: ${colors.thirdRGBA};
  font-size: 18px;
  font-family: "JosefinSans_700Bold";
`;

const Value = styled.Text`
  color: #fff;
  font-size: 24px;
  margin-top: 10px;
  font-weight: bold;
  font-family: "JosefinSans_700Bold";
`;
