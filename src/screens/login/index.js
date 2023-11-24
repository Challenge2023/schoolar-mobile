import { ImageBackground, Text, View } from "react-native";
import Button from "../../components/button/index";
import SafeArea from "../../components/safeArea";
import Colors from "../../theme/colors";
import styles from "./style";
import { SvgXml } from "react-native-svg";
import LoginForm from "../../components/loginform";
import Svgs from "../../../assets/images/svgs";
import { useState } from "react";
import RegularText from "../../components/texts";
import { Pressable } from "react-native";
import { useEffect } from "react";

export default function Login({ navigation }) {
  const Logo = Svgs.xml;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);

  const users = [
    {
      username: "lucas",
      password: "12345",
      title: "pacient",
    },
    {
      username: "caio",
      password: "12345",
      title: "doctor",
      token: token,
      pacient: {
        name: 'Lucas Amadeu',
        birthday: '14/04/2004',
        cpf: '640.290.178-51'
      }
    },
  ];

  const VerifyUser = () => {
    const user = { username, password };

    const foundUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );

    if (foundUser) {
      const userJSON = JSON.stringify(foundUser);
      if (foundUser.title == "doctor") {
        navigation.navigate("Content", { userData: userJSON });
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

  const handleTokenChange = (text) => {
    setToken(text);
  };

  useEffect(() => {
    setUsername('')
    setPassword('')
    setToken('')
  }, [isDoctor])

  const formItems = [
    {
      label: "Usuário",
      placeholder: "Digite seu usuário",
      value: "",
      handleChange: handleUsernameChange,
      set: username,
    },
    {
      label: "Senha",
      placeholder: "Digite sua senha",
      value: "",
      handleChange: handlePasswordChange,
      set: password,
    },
  ];

  const formItemsDoctor = [
    {
      label: "Usuário",
      placeholder: "Digite seu usuário",
      value: "",
      handleChange: handleUsernameChange,
      set: username,
    },
    {
      label: "Senha",
      placeholder: "Digite sua senha",
      value: "",
      handleChange: handlePasswordChange,
      set: password,
    },
    {
      label: "Token",
      placeholder: "Digite o token",
      value: "",
      handleChange: handleTokenChange,
      set: token,
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
              fontSize: 16,
              color: Colors.textDark,
              marginBottom: 20,
            }}
          >
            Login - {isDoctor ? 'Médico' : 'Paciente'}
          </Text>
          <LoginForm formItems={isDoctor ? formItemsDoctor : formItems} />
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
            <Pressable onPress={() => setIsDoctor(!isDoctor)} style={styles.accountContainer}>
              <RegularText weight='Regular' color={Colors.textLight} fontSize={12} content={"Faça Login"} />
              <View style={{ padding: 2 }}></View>
              <RegularText weight='Medium' color={Colors.primary} fontSize={12} content={isDoctor ? 'como Paciente' : 'como Médico'} />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeArea>
  );
}