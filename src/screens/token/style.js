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
    mainContainer: {
        display: 'flex',
        paddingTop: 60,
        paddingLeft: 35,
        paddingRight: 35,
        height: '100%',
    },
});