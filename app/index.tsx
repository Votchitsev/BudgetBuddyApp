import { Text } from "react-native";
import styled from 'styled-components/native'
import { colors } from '@shared/style';

export default function Index() {
  return (
    <View>
      <Text>Hello App</Text>
    </View>
  );
}

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${ colors.mainRGBA };
`
