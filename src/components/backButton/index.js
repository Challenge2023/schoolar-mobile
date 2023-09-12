import { Pressable } from "react-native";
import styles from "./style";
import { createIconSetFromFontello } from "react-native-vector-icons";
import Size from "../../theme/typography";

export default function BackButton({ action, iconColor, color }) {

  const CustomIcon = createIconSetFromFontello(
    require("../../../assets/images/config.json"),
    "fontello"
  );

  return (
    <Pressable onPress={action} style={[styles.button, { backgroundColor: color }]}>
      <CustomIcon name="go-back" color={iconColor} size={Size.text.medium} />
    </Pressable>
  );
}
