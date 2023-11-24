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
import { FlatList } from "react-native";
import { useRef } from "react";
import { TextInput } from "react-native";
import { ActivityIndicator } from "react-native";
import { Text } from "react-native";

export default function Content({ route, navigation }) {
    const { userData } = route.params;
    const { username, title, token, pacient } = JSON.parse(userData);

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
            SetData("exam", convertedFormValues)

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

    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const scrollViewRef = useRef();

    const [autoMessageIndex, setAutoMessageIndex] = useState(0);

    const autoMessages = ['Sim, o paciente tem histórico de diabetes. Recomendo monitorar regularmente os níveis de glicose e seguir uma dieta saudável.', 'Não, o paciente não tem histórico de pressão alta. Sugiro manter um estilo de vida ativo e saudável.'];

    const handleSendMessage = () => {
        if (inputText.trim() === '') {
            return;
        }

        setMessages((prevMessages) => [
            ...prevMessages,
            { message: inputText, author: 'user' },
        ]);
        setInputText('');

        setIsTyping(true);
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { message: autoMessages[autoMessageIndex], author: 'auto' },
            ]);
            setIsTyping(false);
            setAutoMessageIndex((prevIndex) => (prevIndex + 1) % autoMessages.length);
        }, 2000);
    };

    const handleTyping = (text) => {
        setInputText(text);
    };

    return (
        <SafeArea>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView style={global.container}>
                    <UserInfo userData={userData} />
                    <View style={global.containerContent}>
                        <View style={{ display: 'flex', gap: 10 }}>
                            <View>
                                <RegularText
                                    weight="Regular"
                                    color={Colors.textLight}
                                    fontSize={Size.text.small}
                                    content={`${pacient.name} - Token ${token}`}
                                />

                            </View>
                            <ToastManager />
                            <View style={style.containerForm}>
                                <View style={{ flex: 1 }}>
                                    <ScrollView
                                        ref={scrollViewRef}
                                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end', paddingBottom: 40 }}
                                        showsVerticalScrollIndicator={false}
                                        style={style.container}
                                    >
                                        {messages.map((item, index) => (
                                            <View
                                                key={index}
                                                style={{
                                                    alignSelf: item.author === 'user' ? 'flex-end' : 'flex-start',
                                                    maxWidth: '65%',
                                                    margin: 4,
                                                    backgroundColor: item.author === 'user' ? Colors.secondary : Colors.chatBackGround,
                                                    padding: 5,
                                                    borderRadius: item.author === 'user' ? 10 : 5,
                                                    borderBottomLeftRadius: item.author === 'user' ? 0 : 10,
                                                }}
                                            >
                                                {item.author !== 'user' && <RegularText
                                                    weight="Medium"
                                                    color={Colors.primary}
                                                    fontSize={Size.text.small}
                                                    content={'chat'}
                                                />}
                                                <RegularText
                                                    weight="Regular"
                                                    color={Colors.white}
                                                    fontSize={Size.text.small}
                                                    content={item.message}
                                                />
                                            </View>
                                        ))}
                                        {isTyping && <Text style={{ alignSelf: 'flex-start', margin: 4 }}>...</Text>}
                                    </ScrollView>


                                    <View style={style.messageContainer}>
                                        <View style={{ width: '80%' }}>
                                            <TextInput
                                                value={inputText}
                                                onChangeText={handleTyping}
                                                placeholder="Digite sua mensagem..."
                                                style={style.input}
                                            />
                                        </View>
                                        <View style={{ width: '15%' }}>
                                            <Button text=">" action={handleSendMessage} color={Colors.primary} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Button
                            action={() => navigation.goBack()}
                            text="Encerrar Consulta"
                            color={Colors.primary}
                        />
                        <Spinner visible={loading} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeArea>
    )
}