import { View } from "react-native";
import SafeArea from "../../components/safeArea";
import RegularText from "../../components/texts";
import Colors from "../../theme/colors";
import global from "../../theme/global";
import Size from "../../theme/typography";
import BackButton from "../../components/backButton";
import Button from "../../components/button";

export default function Generated({ route, navigation }) {
    const { data } = route.params;

    const donwloadPdf = () => {

    }

    return (
        <SafeArea>
            <View style={global.container}>
                <BackButton color={Colors.baseBackground} iconColor={Colors.primary} action={() => navigation.goBack()} />
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
                            fontSize={Size.text.large}
                            content={`Theme: ${data.theme}, Questions: ${data.questions}, Subjects: ${data.subjects}`}
                            align="center"
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
