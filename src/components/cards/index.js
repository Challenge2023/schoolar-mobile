import { TouchableOpacity, View } from "react-native";
import Colors from "../../theme/colors";
import Size from "../../theme/typography";
import RegularText from "../texts";
import style from "./style";
import { createIconSetFromFontello } from "react-native-vector-icons";

export default function Cards({ route, navigation, title, desc, path, icon, userData }) {
    const CustomIcon = createIconSetFromFontello(
        require("../../../assets/images/config.json"),
        "fontello"
    );

    const goToPage = () => {
        navigation.navigate(path, { userData: userData });
    }

    return (
        <TouchableOpacity onPress={() => goToPage()}>
            <View style={style.container}>
                <View style={style.containerText}>
                    <RegularText
                        weight="SemiBold"
                        color={Colors.primary}
                        fontSize={Size.text.large}
                        content={title}
                    />
                    <RegularText
                        weight="Regular"
                        color={Colors.textLight}
                        fontSize={Size.text.small}
                        content={desc}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}