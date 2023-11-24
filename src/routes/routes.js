import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "../navigation/index";
import NavigationStudent from "../navigationStudent/index"

import Login from "../screens/login/index";
import Home from "../screens/home/index";
import Content from "../screens/content/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Generated from "../screens/generated";
import TestVisualizer from "../screens/generated/components/test";
import Management from "../screens/management";
import Historic from "../screens/historic";
import StudentList from "../screens/studentsList";
import StudentsRegister from "../screens/students";
import SignUp from "../screens/signUp";

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
            name="SignUp"
            component={SignUp}
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
          <Stack.Screen
            name="Content"
            component={Content}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          />
          <Stack.Screen
            name="StudentList"
            component={StudentList}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          />
          <Stack.Screen
            name="StudentsRegister"
            component={StudentsRegister}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          />
          <Stack.Screen
            name="Generated"
            component={Generated}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          />
          <Stack.Screen
            name="Management"
            component={Management}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          />
          <Stack.Screen
            name="TestVisualizer"
            component={TestVisualizer}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          />
          <Stack.Screen
            name="Historic"
            component={Historic}
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
