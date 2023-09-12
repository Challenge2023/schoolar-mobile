import { Pressable } from "react-native";
import styles from "./style";
import Colors from "../../theme/colors";
import RegularText from "../texts";

export default function Button({ action, text, color, disabled }) {
  return (
    <Pressable onPress={action} style={[styles.button, { backgroundColor: disabled ? Colors.lightGrey : color }]} disabled={disabled}>
      <RegularText weight='Regular' color={Colors.baseBackground} fontSize={12} content={text} />
    </Pressable>
  );
}
