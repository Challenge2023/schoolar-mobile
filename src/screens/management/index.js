import SafeArea from "../../components/safeArea";
import UserInfo from "../../components/UserInfo";
import { ScrollView, View } from "react-native";
import global from "../../theme/global";
import Cards from "../../components/cards";
import style from "./style";

export default function Management({ route, navigation }) {
    const { userData } = route.params;

    const cardsData = [
        {
            title: 'Criação de Provas',
            desc: 'Com o auxílio do ChatGPT crie provas com questões únicas.',
            path: 'Content',
            icon: 'go-back'
        },
    ]

    return (
        <SafeArea>
            <ScrollView style={global.container}>
                <UserInfo userData={userData} />
                <View style={global.containerContent}>
                    <View style={style.containerCards}>
                        {cardsData.map((data, index) => (
                            <Cards title={data.title} desc={data.desc} path={data.path} key={index} icon={data.icon} userData={userData} navigation={navigation} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeArea>
    )

}