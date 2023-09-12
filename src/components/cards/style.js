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
    },
    containerText: {
        display: 'flex',
        gap: 5,
        width: '80%'
    }
});