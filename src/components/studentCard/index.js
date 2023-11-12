import { View } from "react-native";
import Colors from "../../theme/colors";
import Size from "../../theme/typography";
import RegularText from "../texts";
import style from "./style";
import Button from "../../components/button/index";
import { urlDeleteStudents } from "../../services/api";
import { DeleteStudentData } from "../../integration";

export default function StudentCard({ student, loading }) {
    const firstName = student.name.split(" ")[0];
    const capitalizedUsername = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const firstLetter = capitalizedUsername.charAt(0);

    const DeleteStudent = async (id) => {
        const headers = {
            'id': id,
        };

        loading(true)

        const { data, err } = await DeleteStudentData(urlDeleteStudents, headers)
    }

    const SeeSubjects = () => {

    }

    return (
        <View style={style.container}>
            <View style={style.containerText}>
                <View style={style.letterIcon}>
                    <RegularText
                        weight="SemiBold"
                        color={Colors.baseBackground}
                        fontSize={Size.title.medium}
                        content={firstLetter}
                    />
                </View>
                <RegularText
                    weight="SemiBold"
                    color={Colors.primary}
                    fontSize={Size.title.small}
                    content={student.name}
                />
                <RegularText
                    weight="Regular"
                    color={Colors.textLight}
                    fontSize={Size.text.small}
                    content={`${student.email} - ${student.schoolGrade}`}
                />

                <View style={style.containerButtons}>
                    <Button
                        action={() => DeleteStudent(student.id)}
                        text="Excluir"
                        color={Colors.error}
                    />
                </View>
            </View>
        </View>
    )
}