import * as React from "react";
import * as Font from "expo-font";
import Router from "./src/routes/routes";

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    Font.loadAsync({
      "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
      "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "fontello": require("./assets/fonts/fontello.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) return null;

  return <Router />;
}
