import { KeyboardAvoidingView, Platform, View } from "react-native"
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
import { urlExam } from "../../services/api";
import ToastManager, { Toast } from 'toastify-react-native'
import { GenerateContent } from "../../integration";

export default function Content({ route, navigation }) {
    const { userData } = route.params;
    const [loading, setLoading] = useState(false)

    const [formValues, setFormValues] = useState({
        theme: "",
        questionsNumber: "",
        subject: "",
    });

    const showToastsError = (e) => {
        Toast.error('Erro:', e)
    }

    const sendToAPI = async () => {
        setLoading(true)

        const convertedFormValues = {
            ...formValues,
            questionsNumber: parseInt(formValues.questionsNumber, 10),
        };

        const { data, err } = await GenerateContent(urlExam, convertedFormValues)
        setLoading(false)

        if (err != null) {
            showToastsError(err)
        } else {
            setFormValues({
                theme: "",
                questionsNumber: "",
                subject: "",
            });
            navigation.navigate("Generated", { data: data, subject: convertedFormValues, userData: userData });
        }

    }

    const handleOnChange = (field, value) => {
        setFormValues({
            ...formValues,
            [field]: value,
        });
    };

    const isFormValid = () => {
        return (
            formValues.theme !== "" && formValues.questionsNumber !== ""
        );
    };

    return (
        <SafeArea>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <ScrollView style={global.container}>
                    <UserInfo userData={userData} />
                    <View style={global.containerContent}>
                        <ToastManager />
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
                                    key="subject"
                                    placeholder={"Digite aqui..."}
                                    onChange={(text) => handleOnChange("subject", text.nativeEvent.text)}
                                    value={formValues.subject}
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
                                    key="questionsNumber"
                                    placeholder={"Digite aqui..."}
                                    onChange={(text) => handleOnChange("questionsNumber", text.nativeEvent.text)}
                                    value={formValues.questionsNumber}
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