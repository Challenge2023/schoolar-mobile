import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import Size from "../../theme/typography";

export default StyleSheet.create({
    textArea: {
        textAlignVertical: 'top',
        padding: 15,
        paddingTop: 15,
        borderRadius: 5,
        fontSize: Size.text.small,
        backgroundColor: Colors.baseInput
    }
});