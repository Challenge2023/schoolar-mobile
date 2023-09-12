import { ScrollView, View } from "react-native";
import SafeArea from "../../../../components/safeArea";
import global from "../../../../theme/global";
import Colors from "../../../../theme/colors";
import BackButton from "../../../../components/backButton"
import Size from "../../../../theme/typography";
import RegularText from "../../../../components/texts";
import style from "./style";

export default function TestVisualizer({ route, navigation }) {
    const { data, subject } = route.params;

    return (
        <SafeArea>
            <ScrollView style={global.container}>
                <View style={style.container}>
                    <BackButton color={Colors.baseBackground} iconColor={Colors.primary} action={() => navigation.goBack()} />
                    <RegularText
                        weight="SemiBold"
                        color={Colors.primary}
                        fontSize={Size.title.small}
                        content={`Prova de ${subject.subject}`}
                    />
                </View>
                <View style={[style.containerQuestions, global.containerContent]}>
                    {data.map((item, index) => (
                        <View key={index} style={{ display: 'flex', gap: 10 }}>
                            <RegularText
                                weight="SemiBold"
                                color={Colors.darkGrey}
                                fontSize={Size.text.medium}
                                content={`Pergunta ${index + 1}: ${item.question}`}
                            />
                            {item.answers.map((answer, answerIndex) => (
                                <View key={answerIndex}>
                                    <RegularText
                                        weight="Medium"
                                        color={answer.correct ? Colors.secondary : Colors.textLight}
                                        fontSize={Size.text.medium}
                                        content={`Resposta ${answerIndex + 1}: ${answer.answer}`}
                                    />
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeArea>
    )
}
