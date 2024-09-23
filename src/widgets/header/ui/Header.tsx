import styled from "styled-components/native";
import { colors } from "@shared/style";
import { Image } from "react-native";
import { router } from "expo-router";

interface IProps {
  back: boolean;
  previousPageName?: string;
}

export const Header = ({ back, previousPageName }: IProps) => {
  return (
    <View>
      <SafeAreaView>
        {back ? (
          <BackButton onPress={() => router.back()}>
            <Image source={require("@shared/assets/back.png")} />
            <Text>{previousPageName}</Text>
          </BackButton>
        ) : (
          <Text>{"< Time switch >"}</Text>
        )}
      </SafeAreaView>
    </View>
  );
};

const View = styled.View`
  flex: 1;
  background-color: ${colors.secondaryRGBA};
  justify-content: center;
  padding: 10px;
  padding-inline: 15px;
  border-bottom-left-radius: 15px;
  min-height: 65px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: ${colors.secondaryRGBA};
  min-height: 55px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Text = styled.Text`
  color: ${colors.third};
  font-family: "JosefinSans_700Bold";
  font-size: 20px;
`;

const BackButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
