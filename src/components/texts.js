import { Text } from "react-native";

export default function RegularText({ color, content, weight, fontSize, align }) {

    const poppins = `Poppins-${weight}`

    return (
        <Text style={{ color: color, fontFamily: poppins, fontSize: fontSize, textAlign: align }}>{content}</Text>
    )
}