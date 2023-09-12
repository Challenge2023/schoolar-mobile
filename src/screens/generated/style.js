import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerQuestions: {
        display: 'flex',
        gap: 60,
    },
    containerButtons: {
        display: 'flex',
        gap: 15
    },
    containerVisualizer: {
        display: 'flex',
        gap: 10,
    }
});