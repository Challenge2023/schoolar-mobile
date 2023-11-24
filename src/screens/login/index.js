import { ImageBackground, Text, View } from "react-native";
import Button from "../../components/button/index";
import SafeArea from "../../components/safeArea";
import Colors from "../../theme/colors";
import styles from "./style";
import { SvgXml } from "react-native-svg";
import LoginForm from "../../components/loginform";
import Svgs from "../../../assets/images/svgs";
import { useState } from "react";

export default function Login({ navigation }) {
  const Logo = Svgs.xml;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //FINGINDO ESTAR TRAZENDO DO BANCO
  const users = [
    {
      username: "lucas",
      password: "12345",
      title: "student",
    },
    {
      username: "gabriel",
      password: "12345",
      title: "teacher",
    },
  ];

  const VerifyUser = () => {
    const user = { username, password };

    const foundUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );

    if (foundUser) {
      const userJSON = JSON.stringify(foundUser);
      if (foundUser.title == "teacher") {
        navigation.navigate("Navigation", { userData: userJSON });
      } else {
        navigation.navigate("NavigationStudent", { userData: userJSON });
      }
    } else {
      console.log("Usuário ou senha incorretos.");
    }

  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const formItems = [
    {
      label: "E-mail",
      placeholder: "Digite seu e-mail",
      value: "",
      handleUsernameChange: handleUsernameChange,
      username: username,
    },
    {
      label: "Senha",
      placeholder: "Digite sua senha",
      value: "",
      handlePasswordChange: handlePasswordChange,
      password: password,
    },
  ];

  return (
    <SafeArea>
      <View style={[styles.container, styles.mainContainer]}>
        <SvgXml xml={Logo} />
        <View style={[styles.container, styles.formContainer]}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins-Medium",
              fontSize: 24,
              color: Colors.textDark,
              marginBottom: 20,
            }}
          >
            Login
          </Text>
          <LoginForm formItems={formItems} />
          <View style={{ width: "100%", alignSelf: "center", display: "flex", gap: 10 }}>
            <Button
              action={() => VerifyUser()}
              text="Entrar"
              color={Colors.primary}
            />
            <Button
              action={() => navigation.navigate("SignUp")}
              text="Cadastrar"
              dark={true}
            />
          </View>
        </View>
      </View>
    </SafeArea>
  );
}
