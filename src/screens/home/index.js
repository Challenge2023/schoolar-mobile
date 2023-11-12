import { ScrollView, View, Image } from "react-native"
import SafeArea from "../../components/safeArea";
import UserInfo from "../../components/UserInfo";
import global from "../../theme/global";
import style from "./style";
import RegularText from "../../components/texts";
import Colors from "../../theme/colors";
import Size from "../../theme/typography";
import Button from "../../components/button";
import Cards from "../../components/cards";

export default function Home({ route, navigation }) {
    const { userData } = route.params;

    const cardsData = [
        {
            title: 'Lista de Alunos',
            desc: 'Veja em tempo real a lista dos alunos.',
            path: 'StudentList',
            icon: 'go-back'
        },
        {
            title: 'Cadastro de Alunos',
            desc: 'Cadastre alunos novos de forma simples.',
            path: 'StudentsRegister',
            icon: 'go-back'
        },
    ]

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

                    <View>
                        <View style={style.containerCards}>
                            {cardsData.map((data, index) => (
                                <Cards title={data.title} desc={data.desc} path={data.path} key={index} icon={data.icon} userData={userData} navigation={navigation} />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeArea>
    )
}