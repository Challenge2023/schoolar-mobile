import { View } from "react-native"
import SafeArea from "../../components/safeArea";
import UserInfo from "../../components/UserInfo";
import global from "../../theme/global";
import style from "./style";
import Cards from "../../components/cards";

export default function Grades({ route, navigation }) {
    const { userData } = route.params;

    const cardsData = [
        {
            title: 'Gerar Token',
            desc: 'Gere um token único para suas consultas médicas.',
            path: 'Token',
            icon: 'go-back'
        },
        {
            title: 'Cadastrar Prontuário',
            desc: 'Cadastre todos seus prontuários de forma simples.',
            path: 'Content',
            icon: 'go-back'
        },
        {
            title: 'Visualizar Prontuários',
            desc: 'Visualize todos seus prontuários de forma simples.',
            path: 'Content',
            icon: 'go-back'
        },
    ]

    return (
        <SafeArea>
            <View style={global.container}>
                <UserInfo userData={userData} />
                <View style={global.containerContent}>
                    <View style={style.containerCards}>
                        {cardsData.map((data, index) => (
                            <Cards title={data.title} desc={data.desc} path={data.path} key={index} icon={data.icon} userData={userData} navigation={navigation} />
                        ))}
                    </View>
                </View>
            </View>
        </SafeArea>
    )
}