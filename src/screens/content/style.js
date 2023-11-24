import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default StyleSheet.create({
    space: {
        display: 'flex',
        gap: 10
    },
    containerForm: {
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
        paddingBottom: 60
    },
    containerHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: 40,
        borderRadius: 5,
        padding: 10,
        backgroundColor: Colors.white,
        width: '100%',
        fontSize: 10,
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: '10%',
        paddingTop: 15
    },
    container: {
        backgroundColor: Colors.white,
        paddingTop: 20,
        paddingBottom: 15,
        padding: 5,
        borderRadius: 5,
        maxHeight: 250,
        minHeight: 150
    }
});