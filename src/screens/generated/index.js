import { View } from "react-native";
import SafeArea from "../../components/safeArea";
import RegularText from "../../components/texts";
import Colors from "../../theme/colors";
import global from "../../theme/global";
import Size from "../../theme/typography";
import Button from "../../components/button";

export default function Generated({ route, navigation }) {
    const { data, subject } = route.params;

    const donwloadPdf = () => {

    }

    const visualizerTest = () => {
        navigation.navigate("TestVisualizer", { data: data, subject: subject });
    }

    // data.forEach((item, index) => {
    //     console.log(`Pergunta ${index + 1}: ${item.question}`);

    //     item.answers.forEach((answer, answerIndex) => {
    //         console.log(`Resposta ${answerIndex + 1}: ${answer.answer}`);
    //         console.log(`Correta? ${answer.correct ? 'Sim' : 'Não'}`);
    //     });

    //     console.log("-----------------------");
    // });

    return (
        <SafeArea>
            <View style={global.container}>
                <View style={global.containerContent}>
                    <RegularText
                        weight="SemiBold"
                        color={Colors.secondary}
                        fontSize={Size.title.large}
                        content={'Prova gerada com sucesso!'}
                        align="center"
                    />
                    <View>
                        <RegularText
                            weight="SemiBold"
                            color={Colors.darkGrey}
                            fontSize={Size.text.medium}
                            content={`Pré-visualização da prova`}
                        />
                        <Button
                            action={() => visualizerTest()}
                            text="Visualizar"
                            color={Colors.primary}
                        />
                    </View>
                    <Button
                        action={() => donwloadPdf()}
                        text="Download PDF"
                        color={Colors.primary}
                    />
                </View>
            </View>
        </SafeArea>
    )
}
