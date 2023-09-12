import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Colors from "../theme/colors";

import Home from "../screens/home/index";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import Size from "../theme/typography";
import Management from "../screens/management";

const Tab = createMaterialBottomTabNavigator();

const NavBottom = ({ route }) => {
  const { userData } = route.params;

  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"

  function ExitButton() {
    const navigation = useNavigation();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
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
            <CustomIcon name="home" color={color} size={Size.title.medium} />
          ),
        }}
      />

      <Tab.Screen name="Management" component={Management}
        initialParams={{ userData }}
        options={{
          tabBarLabel: "Provas",
          tabBarIcon: ({ color }) => (
            <CustomIcon name="classes" color={color} size={Size.title.medium} />
          ),
        }}
      />

      <Tab.Screen
        name="Exit"
        component={ExitButton}
        options={{
          tabBarLabel: "Sair",
          tabBarIcon: ({ color }) => (
            <CustomIcon name="sign-out" color={color} size={Size.title.medium} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBottom;
