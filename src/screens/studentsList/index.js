import { View } from "react-native";
import SafeArea from "../../components/safeArea";
import { ScrollView } from "react-native";
import style from "./style";
import Colors from "../../theme/colors";
import Size from "../../theme/typography";
import BackButton from "../../components/backButton";
import RegularText from "../../components/texts";
import global from "../../theme/global";
import { useEffect, useState } from "react";
import { GetStudentList } from "../../integration";
import { urlStudents } from "../../services/api";
import StudentCard from "../../components/studentCard";
import Spinner from "react-native-loading-spinner-overlay";

export default function StudentList({ route, navigation }) {
    const [studentsData, setStudentsData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        GetStudentList(urlStudents)
            .then(({ data, err }) => {
                setStudentsData(data);
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.error("Erro ao obter lista de alunos", error);
            });
    }, [loading]);


    return (
        <SafeArea>
            <ScrollView style={global.container}>
                <View style={style.containerHeader}>
                    <BackButton color={Colors.primary} iconColor={Colors.primary} action={() => navigation.goBack()} />
                    <RegularText
                        weight="SemiBold"
                        color={Colors.primary}
                        fontSize={Size.title.small}
                        content={`Lista de Alunos`}
                    />
                </View>
                <View style={style.containerStudents}>
                    {studentsData && (
                        studentsData.map((item, key) => {
                            return (
                                <StudentCard student={item} key={key} loading={setLoading} />
                            )
                        })
                    )}

                </View>
                <Spinner visible={loading} />
            </ScrollView>
        </SafeArea>
    )
}