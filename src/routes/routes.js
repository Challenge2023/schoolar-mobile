import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "../navigation/index";
import NavigationStudent from "../navigationStudent/index"

import Login from "../screens/login/index";
import Home from "../screens/home/index";
import Content from "../screens/content/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Generated from "../screens/generated";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          />
          <Stack.Screen
            name="Navigation"
            component={Navigation}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          />
          <Stack.Screen
            name="NavigationStudent"
            component={NavigationStudent}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Content" component={Content} />
          <Stack.Screen
            name="Generated"
            component={Generated}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
