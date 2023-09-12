import RegularText from "../texts";
import Colors from "../../theme/colors";
import moment from "moment/moment";
import "moment/locale/pt-br";
import { View } from "react-native";
import styles from "./style";
import Size from "../../theme/typography";

export default function UserInfo({ userData }) {
  moment.locale("pt-br");
  let date = moment().format("DD MMMM");

  const { username, title } = JSON.parse(userData);
  const firstName = username.split(" ")[0];
  const capitalizedUsername =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const firstLetter = capitalizedUsername.charAt(0);

  return (
    <View style={styles.container}>
      <View>
        <RegularText
          weight="SemiBold"
          color={Colors.textLight}
          fontSize={Size.text.small}
          content={date}
        />
        <RegularText
          weight="SemiBold"
          color={Colors.darkGrey}
          fontSize={Size.title.small}
          content={`Olá, ${title == "teacher" ? 'Prof. ' : ''}${capitalizedUsername}`}
        />
      </View>
      <View style={styles.letterIcon}>
        <RegularText
          weight="SemiBold"
          color={Colors.baseBackground}
          fontSize={Size.title.medium}
          content={firstLetter}
        />
      </View>
    </View>
  );
}
