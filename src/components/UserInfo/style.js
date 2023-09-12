import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    letterIcon: {
        display: "flex",
        width: 50,
        paddingTop: 5,
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
