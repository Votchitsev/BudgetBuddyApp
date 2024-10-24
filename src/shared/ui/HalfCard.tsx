import { Dimensions } from "react-native";
import { colors } from "@shared/style";
import styled from "styled-components/native";

interface IProps {
  title: string;
  value: string;
  onPress: () => void;
}

const { width } = Dimensions.get("window");
const sideSize = width * 0.42;

const HalfCard = ({ title, value, onPress }: IProps) => {
  return (
    <Card onPress={onPress}>
      <Title>{title}</Title>
      <ValueContainer>
        <Value>{value} ₽</Value>
      </ValueContainer>
    </Card>
  );
};

export default HalfCard;

const Card = styled.TouchableOpacity`
  height: ${sideSize}px;
  width: ${sideSize}px;
  background-color: ${colors.secondaryRGBA};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 15px;
`;

const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: ${colors.third};
  font-family: "JosefinSans_700Bold";
`;

const ValueContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  transform: translateY(-12px);
`;

const Value = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  font-family: "JosefinSans_700Bold";
`;
