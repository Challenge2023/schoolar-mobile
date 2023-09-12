import { Pressable } from "react-native";
import styles from "./style";
import { createIconSetFromFontello } from "react-native-vector-icons";
import Size from "../../theme/typography";
import RegularText from "../texts";

export default function BackButton({ action, iconColor, color, close }) {

  const CustomIcon = createIconSetFromFontello(
    require("../../../assets/images/config.json"),
    "fontello"
  );

  return (
    <Pressable onPress={action} style={[styles.button, { borderWidth: 1.5, borderColor: color }]}>
      {close ? <RegularText
        weight="Regular"
        color={iconColor}
        fontSize={Size.title.small}
        content='X'
      /> : <CustomIcon name="go-back" color={iconColor} size={Size.text.medium} />}
    </Pressable>
  );
}
