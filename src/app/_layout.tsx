import { Stack } from "expo-router";
import { View } from "react-native";
import { colors } from "@shared/style";
import { Header } from "@widgets/header";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import { RootModal } from "@shared/ui";
import { useEffect, useState } from "react";
import DBGenerator from "./model/DBGenerator";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    DBGenerator.generate()
      .then(() => setDbInitialized(true))
      .catch((err) => console.log(err));
  }, []);

  if (!fontsLoaded || !dbInitialized) {
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
      <RootModal />
    </View>
  );
}
