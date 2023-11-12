import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, View, ScrollView } from "react-native";
import SafeArea from "../../components/safeArea";
import global from "../../theme/global";
import Button from "../../components/button";
import Colors from "../../theme/colors";
import style from "./style";
import RegularText from "../../components/texts";
import Size from "../../theme/typography";
import TextArea from "../../components/textArea";
import Icon from "react-native-vector-icons/FontAwesome"; // ou qualquer outra biblioteca de ícones
import Spinner from "react-native-loading-spinner-overlay";
import ToastManager, { Toast } from "toastify-react-native";
import { GenerateContent } from "../../integration";
import BackButton from "../../components/backButton";
import { SetData } from "../../context/data";
import { TouchableOpacity } from "react-native";
import { urlRegisterStudents } from "../../services/api";

const StudentsRegister = ({ route, navigation }) => {
    const { userData } = route.params;
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        schoolGrade: "",
        subjects: [], // Lista para armazenar as matérias adicionadas
    });

    const showToastsError = (e) => {
        Toast.error("Erro:", e);
    };

    const sendToAPI = async () => {
        setLoading(true);

        const { data, err } = await GenerateContent(urlRegisterStudents, formValues);
        setLoading(false);

        if (err != null) {
            showToastsError(err);
        } else {
            navigation.goBack()
        }
    };

    const handleOnChange = (field, value) => {
        setFormValues({
            ...formValues,
            [field]: value,
        });
    };

    const addSubject = () => {
        setFormValues({
            ...formValues,
            subjects: [
                ...formValues.subjects,
                { code: "", averageGrade: 0.0, absences: 0 },
            ], // Adiciona uma nova matéria vazia à lista
        });
    };

    const handleSubjectChange = (index, field, value) => {
        const updatedSubjects = [...formValues.subjects];
        updatedSubjects[index] = {
            ...updatedSubjects[index],
            [field]: value,
        };

        setFormValues({
            ...formValues,
            subjects: updatedSubjects,
        });
    };

    const removeSubject = (index) => {
        const updatedSubjects = [...formValues.subjects];
        updatedSubjects.splice(index, 1);

        setFormValues({
            ...formValues,
            subjects: updatedSubjects,
        });
    };

    const isFormValid = () => {
        return formValues.name !== "" && formValues.email !== "" && formValues.schoolGrade !== "";
    };

    return (
        <SafeArea>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView style={global.container}>
                    <View style={style.containerHeader}>
                        <BackButton color={Colors.primary} iconColor={Colors.primary} action={() => navigation.goBack()} />
                        <RegularText
                            weight="SemiBold"
                            color={Colors.primary}
                            fontSize={Size.title.small}
                            content={`Registar Aluno`}
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
                                    content={"Nome"}
                                />
                                <TextArea
                                    lines={1}
                                    key="name"
                                    placeholder={"Digite aqui..."}
                                    onChange={(text) => handleOnChange("name", text.nativeEvent.text)}
                                    value={formValues.name}
                                    keyboardType="default"
                                    multiline={false}
                                />
                            </View>
                            <View style={style.space}>
                                <RegularText
                                    weight="SemiBold"
                                    color={Colors.textLight}
                                    fontSize={Size.text.medium}
                                    content={"E-mail"}
                                />
                                <TextArea
                                    lines={1}
                                    key="email"
                                    placeholder={"Digite aqui..."}
                                    onChange={(text) => handleOnChange("email", text.nativeEvent.text)}
                                    value={formValues.email}
                                    keyboardType="email-address"
                                    multiline={false}
                                />
                            </View>
                            <View style={style.space}>
                                <RegularText
                                    weight="SemiBold"
                                    color={Colors.textLight}
                                    fontSize={Size.text.medium}
                                    content={"Série Escolar"}
                                />
                                <TextArea
                                    lines={1}
                                    key="schoolGrade"
                                    placeholder={"Digite aqui..."}
                                    onChange={(text) => handleOnChange("schoolGrade", text.nativeEvent.text)}
                                    value={formValues.schoolGrade}
                                    keyboardType="default"
                                    multiline={false}
                                />
                            </View>
                            <View>
                                <RegularText
                                    weight="SemiBold"
                                    color={Colors.textDark}
                                    fontSize={Size.text.medium}
                                    content={`Matérias do aluno`}
                                />
                            </View>
                            {formValues.subjects.map((subject, index) => (
                                <View key={index} style={style.space}>
                                    <View style={style.subjectContainer}>
                                        <RegularText
                                            weight="SemiBold"
                                            color={Colors.textLight}
                                            fontSize={Size.text.medium}
                                            content={`Matéria ${index + 1}`}
                                        />
                                        <View style={style.subjectInputContainer}>
                                            <View style={style.space}>
                                                <RegularText
                                                    weight="SemiBold"
                                                    color={Colors.textLight}
                                                    fontSize={Size.text.medium}
                                                    content={"Nome"}
                                                />
                                                <TextArea
                                                    lines={1}
                                                    placeholder={"Digite aqui..."}
                                                    onChange={(text) =>
                                                        handleSubjectChange(index, "code", text.nativeEvent.text)
                                                    }
                                                    value={subject.code}
                                                    keyboardType="default"
                                                    multiline={false}
                                                />
                                            </View>
                                            <View style={style.space}>
                                                <RegularText
                                                    weight="SemiBold"
                                                    color={Colors.textLight}
                                                    fontSize={Size.text.medium}
                                                    content={"Média da Matéria"}
                                                />

                                                <TextArea
                                                    lines={1}
                                                    placeholder={"Digite aqui..."}
                                                    onChange={(text) =>
                                                        handleSubjectChange(index, "averageGrade", parseFloat(text.nativeEvent.text))
                                                    }
                                                    value={subject.averageGrade.toString()}
                                                    keyboardType="numeric"
                                                    multiline={false}
                                                />
                                            </View>
                                            <View style={style.space}>
                                                <RegularText
                                                    weight="SemiBold"
                                                    color={Colors.textLight}
                                                    fontSize={Size.text.medium}
                                                    content={"Faltas da Matéria"}
                                                />
                                                <TextArea
                                                    lines={1}
                                                    placeholder={"Digite aqui..."}
                                                    onChange={(text) =>
                                                        handleSubjectChange(index, "absences", parseInt(text.nativeEvent.text))
                                                    }
                                                    value={subject.absences.toString()}
                                                    keyboardType="numeric"
                                                    multiline={false}
                                                />
                                            </View>
                                        </View>
                                        <TouchableOpacity style={style.iconContainer} onPress={() => removeSubject(index)}>
                                            <Icon
                                                name="trash-o"
                                                size={20}
                                                color={Colors.error}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                            <Button
                                action={addSubject}
                                text="Adicionar Matéria"
                                color={Colors.primary}
                                loading={loading}
                            />
                        </View>
                        <Button
                            action={sendToAPI}
                            text="Cadastrar Aluno"
                            color={Colors.primary}
                            disabled={!isFormValid()}
                            loading={loading}
                        />
                        <Spinner visible={loading} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeArea>
    );
};

export default StudentsRegister;