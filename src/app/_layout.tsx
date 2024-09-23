import { Stack } from "expo-router";
import { View } from "react-native";
import { colors } from "@shared/style";
import { Header } from "@widgets/header";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.mainRGBA }}>
      <Stack
        screenOptions={{
          header: () => Header({ back: false }),
        }}
        initialRouteName="index"
      >
        <Stack.Screen name="index" options={{ title: "Главная" }} />
        <Stack.Screen
          name="budget"
          options={{
            title: "Бюджет",
            headerBackButtonMenuEnabled: true,
            header: () => Header({ back: true, previousPageName: "Главная" }),
          }}
        />
      </Stack>
    </View>
  );
}
