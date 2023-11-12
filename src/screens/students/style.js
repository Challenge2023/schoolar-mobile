import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

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
    subjectInputContainer: {
        display: 'flex',
        paddingTop: 20,
        gap: 20,
        width: '100%'
    },
    subjectContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },

    iconContainer: {
        padding: 15,
        backgroundColor: Colors.baseBackground,
        marginTop: 20,
        borderRadius: 10
    }
});