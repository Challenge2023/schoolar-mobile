import { ScrollView, View, Image } from "react-native"
import SafeArea from "../../components/safeArea";
import UserInfo from "../../components/UserInfo";
import global from "../../theme/global";
import style from "./style";
import RegularText from "../../components/texts";
import Colors from "../../theme/colors";
import Size from "../../theme/typography";
import Button from "../../components/button";

export default function Home({ route, navigation }) {
    const { userData } = route.params;

    return (
        <SafeArea>
            <ScrollView style={global.container}>
                <UserInfo userData={userData} />
                <View style={[global.containerContent, { gap: 20 }]}>
                    <View style={style.container}>
                        <View style={style.containerCard}>
                            <View style={style.containerContent}>
                                <RegularText
                                    weight="SemiBold"
                                    color={Colors.baseBackground}
                                    fontSize={Size.text.large}
                                    content={`Venha fazer parte da revolução tecnológica`}
                                />
                                <View style={style.button}>
                                    <Button
                                        action={() => navigation.navigate("Management")}
                                        text="Ir para provas"
                                        color={Colors.primary}
                                    />
                                </View>
                            </View>
                            <Image source={require('../../../assets/images/reading.jpg')} style={style.image} />
                        </View>
                    </View>

                    <Image source={require('../../../assets/images/charts.jpg')} style={style.imageFull} />

                </View>
            </ScrollView>
        </SafeArea>
    )
}