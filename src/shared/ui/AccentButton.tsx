import { colors } from "../style";
import { FC } from "react";
import styled from "styled-components/native";

interface IProps extends React.ComponentProps<typeof StyledTouchableOpacity> {
  label: string;
}

const AccentButton: FC<IProps> = ({ label, ...props }): JSX.Element => {
  return (
    <StyledTouchableOpacity {...props}>
      <StyledText>{label}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default AccentButton;

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${colors.accent};
  height: 25px;
  border-radius: 12.5px;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  color: ${colors.main};
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledText = styled.Text`
  color: ${colors.secondaryAccent};
  font-family: "JosefinSans_700Bold";
`;
