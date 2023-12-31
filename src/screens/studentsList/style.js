import { StyleSheet } from "react-native";

export default StyleSheet.create({
    space: {
        display: 'flex',
        gap: 10
    },
    containerForm: {
        display: 'flex',
        gap: 40,
        paddingBottom: 60
    },
    containerHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerStudents: {
        paddingTop: 80,
        paddingBottom: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: 30
    },
});