import { useEffect, useState } from "react";
import RegularText from "../../components/texts";
import Colors from "../../theme/colors";
import Size from "../../theme/typography";
import { View } from "react-native";
import { GetData } from "../../context/data";
import SafeArea from "../../components/safeArea";
import global from "../../theme/global";
import BackButton from "../../components/backButton";
import style from "./style";

export default function Historic({ navigation }) {

    const [exam, setExam] = useState({})

    useEffect(() => {
        const CallBack = (exam) => {
            setExam(exam)
        }

        GetData(CallBack, 'exam')
    }, [])

    return (
        <SafeArea>
            <View style={global.container}>
                <View style={style.container}>
                    <BackButton color={Colors.primary} iconColor={Colors.primary} action={() => navigation.goBack()} />
                    <RegularText
                        weight="SemiBold"
                        color={Colors.primary}
                        fontSize={Size.title.small}
                        content={`Histórico de provas`}
                    />
                </View>
                <View style={global.containerContent}>
                    <View style={style.containerCard}>
                        <View style={style.containerText}>
                            <RegularText
                                weight="SemiBold"
                                color={Colors.primary}
                                fontSize={Size.text.large}
                                content={exam.subject}
                            />
                            <RegularText
                                weight="Regular"
                                color={Colors.textLight}
                                fontSize={Size.text.small}
                                content={exam.theme}
                            />
                        </View>
                        <RegularText
                            weight="Regular"
                            color={Colors.textLight}
                            fontSize={Size.text.small}
                            content={`q. perguntas: ${exam.questionsNumber}`}
                        />
                    </View>
                </View>
            </View>
        </SafeArea>
    )

}