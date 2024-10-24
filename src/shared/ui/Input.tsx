import { colors } from "@shared/style";
import styled from "styled-components/native";

const Input = styled.TextInput`
  width: 100%;
  background-color: ${colors.secondaryRGBA};
  color: #fff;
  min-height: 60px;
  border-radius: 15px;
  padding: 15px;
  font-size: 20px;
  font-family: "JosefinSans_700Bold";
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default Input;
