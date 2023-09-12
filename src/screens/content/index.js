import { KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native"
import SafeArea from "../../components/safeArea";
import UserInfo from "../../components/UserInfo";
import global from "../../theme/global";
import Button from "../../components/button";
import Colors from "../../theme/colors";
import style from "./style";
import RegularText from "../../components/texts";
import Size from "../../theme/typography";
import TextArea from "../../components/textArea";
import { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { ScrollView } from "react-native";

export default function Content({ route, navigation }) {
    const { userData } = route.params;
    const [loading, setLoading] = useState(false)

    const [formValues, setFormValues] = useState({
        theme: "",
        questions: "",
        subjects: "",
    });

    const sendToAPI = () => {
        setLoading(true)

        // finge que é a req
        setInterval(() => {
            setLoading(false)
            navigation.navigate("Generated", { data: formValues });
        }, 2000)

    }

    const handleOnChange = (field, value) => {
        setFormValues({
            ...formValues,
            [field]: value,
        });
    };

    const isFormValid = () => {
        return (
            formValues.theme !== "" && formValues.questions !== ""
        );
    };

    return (
        <SafeArea>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <ScrollView style={global.container}>
                    <UserInfo userData={userData} />
                    <View style={global.containerContent}>
                        <View style={style.containerForm}>
                            <View style={style.space}>
                                <RegularText
                                    weight="SemiBold"
                                    color={Colors.textLight}
                                    fontSize={Size.text.medium}
                                    content={"Tema para geração da prova"}
                                />
                                <TextArea
                                    lines={10}
                                    key="theme"
                                    placeholder={"Digite aqui..."}
                                    onChange={(text) => handleOnChange("theme", text.nativeEvent.text)}
                                    value={formValues.theme}
                                    keyboardType="default"
                                    multiline={true}
                                    height={200}
                                />
                            </View>
                            <View style={style.space}>
                                <RegularText
                                    weight="SemiBold"
                                    color={Colors.textLight}
                                    fontSize={Size.text.medium}
                                    content={"Matéria"}
                                />
                                <TextArea
                                    lines={1}
                                    key="subjects"
                                    placeholder={"Digite aqui..."}
                                    onChange={(text) => handleOnChange("subjects", text.nativeEvent.text)}
                                    value={formValues.subjects}
                                    keyboardType="default"
                                    multiline={false}
                                />
                            </View>
                            <View style={style.space}>
                                <RegularText
                                    weight="SemiBold"
                                    color={Colors.textLight}
                                    fontSize={Size.text.medium}
                                    content={"Quantidade de perguntas"}
                                />
                                <TextArea
                                    lines={1}
                                    key="questions"
                                    placeholder={"Digite aqui..."}
                                    onChange={(text) => handleOnChange("questions", text.nativeEvent.text)}
                                    value={formValues.questions}
                                    keyboardType="number-pad"
                                    multiline={false}
                                />
                            </View>
                        </View>
                        <Button
                            action={sendToAPI}
                            text="Gerar"
                            color={Colors.primary}
                            disabled={!isFormValid()}
                            loading={loading}
                        />
                        <Spinner visible={loading} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeArea>
    )
}