import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Colors from "../theme/colors";

import Home from "../screens/homeStudent/index";
import Grades from "../screens/grades/index";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Button } from "react-native";

const Tab = createMaterialBottomTabNavigator();

const NavBottom = ({ route }) => {
  const { userData } = route.params;

  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"

  function ExitButton() {
    const navigation = useNavigation();

    const handleExitPress = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    };

    return (
      <Button
        title="Sair"
        onPress={handleExitPress}
      // Adicione outros estilos ou props conforme necessário
      />
    );
  }

  const CustomIcon = createIconSetFromFontello(
    require("../../assets/images/config.json"),
    "fontello"
  );
  return (
    <Tab.Navigator activeColor={Colors.primary} inactiveColor={Colors.lightGrey}
      barStyle={{
        backgroundColor: Colors.baseBackground,
        paddingBottom: "1%",
        paddingTop: "1%",
      }}
    >
      <Tab.Screen name="Home" component={Home}
        initialParams={{ userData }}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <CustomIcon name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen name="Classes" component={Grades}
        initialParams={{ userData }}
        options={{
          tabBarLabel: "Boletim",
          tabBarIcon: ({ color }) => (
            <CustomIcon name="grades" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Exit"
        component={ExitButton}
        options={{
          tabBarLabel: "Sair",
          tabBarIcon: ({ color }) => (
            <CustomIcon name="sign-out" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBottom;
