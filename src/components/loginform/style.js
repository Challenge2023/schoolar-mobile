import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderRadius: 5,
    padding: 10,
    backgroundColor: Colors.inputBackground,
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
});
