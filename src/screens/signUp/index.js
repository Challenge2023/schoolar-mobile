import { Pressable, ScrollView, Text, View } from "react-native";
import SignUpForm from "../../components/signupform";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import Colors from "../../theme/colors";
import RegularText from "../../components/texts";
import { hasCnpj, hasCpf, hasDateOfBirth, hasEmail, hasName } from "../../context/validForm";
import Svgs from "../../../assets/images/svgs";
import SafeArea from "../../components/safeArea";
import { SvgXml } from "react-native-svg";
import style from "./style";
import { postAxios } from "../../context/Integration";
import Loading from "../../components/loading/index"

export default function SignUp({ navigation, route }) {
    const [form, setForm] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('')
    const [birthday, setBirthday] = useState('')
    const [signUpResp, setResp] = useState('')
    const [isSignUpClicked, setIsSignUpClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const Logo = Svgs.xml;

    useEffect(() => {
        if (signUpResp != '') {
            setIsLoading(false)
            navigation.navigate("Login")
        }
    }, [signUpResp])


    useEffect(() => {
        if (isSignUpClicked) {
            if (!hasName(form.name)) {
                setName('Preencha o nome corretamente - ex: Lucas Amadeu');
            } else {
                setName('');
            }
            if (!hasEmail(form.email)) {
                setEmail('Preencha o e-mail corretamente');
            } else {
                setEmail('');
            }
            if (!hasCpf(form.cpf)) {
                setCpf('Preencha o CPF corretamente');
            } else {
                setCpf('');
            }
            if (!hasDateOfBirth(form.birthday)) {
                setBirthday('Preencha a data de nascimento corretamente');
            } else {
                setBirthday('');
            }
        }
    }, [isSignUpClicked, form.name, form.email, form.pass]);

    const CallBack = (key, value) => {
        var clone = Object.assign({}, form)
        clone[key] = value
        setForm(clone)
    }

    const Validate = () => {
        return (form.name && form.email && form.pass) ? true : false
    }

    const Route = async () => {
        setIsLoading(true)

        const userJSON = JSON.stringify(form);

        console.log(userJSON)

        // await postAxios(setResp, 'user', userJSON)
    }

    if (isLoading) {
        return <Loading />;
    }

    const SignUp = () => {
        setIsSignUpClicked(true)
        ValidateForm()
    }

    const ValidateForm = () => {
        (Validate())
            ? Route()
            : console.log("erro na validação")
    }

    const formItems = [
        {
            name: 'name',
            label: 'Nome *',
            value: form.name,
            placeholder: 'nome completo',
            CallBack: CallBack,
            keyboard: 'default',
            max: 100,
            secure: false,
            hasMask: false,
            error: name
        },
        {
            name: 'email',
            label: 'E-mail *',
            value: form.email,
            placeholder: 'e-mail',
            CallBack: CallBack,
            keyboard: 'email-address',
            max: 100,
            secure: false,
            hasMask: false,
            error: email
        },
        {
            name: 'cpf',
            label: 'CPF *',
            value: form.cpf,
            placeholder: 'cpf',
            CallBack: CallBack,
            keyboard: 'number-pad',
            max: 11,
            secure: false,
            hasMask: true,
            typeMask: 'cpf',
            error: cpf
        },
        {
            name: 'birthday',
            label: 'Data de Nascimento *',
            value: form.birthday,
            placeholder: 'data de nascimento',
            CallBack: CallBack,
            keyboard: 'number-pad',
            max: 8,
            secure: false,
            hasMask: true,
            typeMask: 'datetime',
            error: birthday
        },
        {
            name: 'pass',
            label: 'Senha *',
            value: form.pass,
            placeholder: 'senha',
            CallBack: CallBack,
            keyboard: 'default',
            max: 20,
            secure: true,
            hasMask: false,
            error: password
        }
    ];

    return (
        <SafeArea>
            <ScrollView style={{ backgroundColor: Colors.baseBackground }}>
                <View style={{ width: '100%', display: 'flex', alignItems: 'center', paddingTop: 50, paddingBottom: 30 }}>
                    <SvgXml xml={Logo} />
                </View>

                <SignUpForm formItems={formItems} />
                <View style={{ width: "70%", alignSelf: "center", paddingBottom: 20 }}>
                    <Button
                        action={() => SignUp()}
                        text="Cadastrar"
                        color={Colors.primary}
                    />
                </View>
                <View style={style.accountContainer}>
                    <RegularText weight='Regular' color={Colors.textLight} fontSize={12} content={"Já possui uma conta?"} />
                    <View style={{ padding: 2 }}></View>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <RegularText weight='Medium' color={Colors.primary} fontSize={12} content={"Faça login"} />
                    </Pressable>
                </View>
            </ScrollView>
        </SafeArea>
    );
}
