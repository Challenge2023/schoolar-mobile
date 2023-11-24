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
import BackButton from "../../components/backButton";
import { SetData } from "../../context/data"

export default function Token({ route, navigation }) {
    const { userData } = route.params;
    const [loading, setLoading] = useState(false)

    const [formValues, setFormValues] = useState({
        token: "",
    });

    const sendToAPI = async () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setFormValues({ token: '983574' })
        }, 1500);

    }

    const handleOnChange = (field, value) => {
        setFormValues({
            ...formValues,
            [field]: value,
        });
    };

    return (
        <SafeArea>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <ScrollView style={global.container}>
                    <View style={style.containerHeader}>
                        <BackButton color={Colors.primary} iconColor={Colors.primary} action={() => navigation.goBack()} />
                        <RegularText
                            weight="SemiBold"
                            color={Colors.primary}
                            fontSize={Size.title.small}
                            content={`Geração de Token`}
                        />
                    </View>
                    <View style={global.containerContent}>
                        <ToastManager />
                        <View style={style.containerForm}>
                            <View style={style.space}>
                                <RegularText
                                    weight="SemiBold"
                                    color={Colors.textLight}
                                    fontSize={Size.text.medium}
                                    content={"Token"}
                                />
                                <TextArea
                                    lines={1}
                                    key="subject"
                                    placeholder={"número aparecerá aqui..."}
                                    onChange={(text) => handleOnChange("subject", text.nativeEvent.text)}
                                    value={formValues.token}
                                    keyboardType="default"
                                    multiline={false}
                                />
                            </View>
                        </View>
                        <Button
                            action={sendToAPI}
                            text="Gerar"
                            color={Colors.primary}
                            loading={loading}
                        />
                        <Spinner visible={loading} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeArea>
    )
}