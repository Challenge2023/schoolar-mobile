import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    padding: 30,
    display: "flex",
    marginBottom: 20,
    width: '100%'
  },
  input: {
    height: 40,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    backgroundColor: Colors.inputBackground,
    fontSize: 10,
  },
});
