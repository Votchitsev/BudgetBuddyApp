import { colors } from "@shared/style";
import styled from "styled-components/native";

interface IProps extends React.ComponentProps<typeof ButtonComponent> {
  label: string;
}

const Button = ({ label, ...props }: IProps) => (
  <ButtonComponent {...props}>
    <ButtonText>{label}</ButtonText>
  </ButtonComponent>
);

const ButtonComponent = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: ${colors.third};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${colors.main};
  font-family: "JosefinSans_700Bold";
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ButtonText = styled.Text`
  color: ${colors.main};
  font-size: 18px;
  font-family: "JosefinSans_700Bold";
`;

export default Button;
