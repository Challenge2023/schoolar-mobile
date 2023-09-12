import { Pressable } from "react-native";
import styles from "./style";
import Colors from "../../theme/colors";
import RegularText from "../texts";

export default function Button({ action, text, color, disabled, dark }) {
  return (
    <Pressable onPress={action} style={[styles.button, { backgroundColor: disabled ? Colors.lightGrey : color, borderWidth: dark ? 1 : 0, borderColor: dark ? Colors.primary : '' }]} disabled={disabled}>
      <RegularText weight='Medium' color={dark ? Colors.primary : Colors.baseBackground} fontSize={12} content={text} />
    </Pressable>
  );
}
