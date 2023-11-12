import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: Colors.baseBackground,
        width: '100%'
    },
    containerText: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        width: '100%'
    },
    letterIcon: {
        display: "flex",
        width: 50,
        paddingTop: 5,
        marginBottom: 25,
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButtons: {
        display: "flex",
        flexDirection: "row",
        width: "40%",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingTop: 30

    }
});