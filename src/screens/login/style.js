import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    padding: 30,
  },
  mainContainer: {
    backgroundColor: Colors.inputBackground,
    height: "100%",
    alignItems: "center",
    paddingTop: '20%'
  },
  formContainer: {
    backgroundColor: Colors.baseBackground,
    borderRadius: 10,
    paddingBottom: 50,
    marginTop: '15%'
  },
  accountContainer: {
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 50
  },
});
