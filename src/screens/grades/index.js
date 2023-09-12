import { View } from "react-native"
import SafeArea from "../../components/safeArea";
import UserInfo from "../../components/UserInfo";
import global from "../../theme/global";

export default function Grades({route}) {
    const { userData } = route.params;

    return (
    <SafeArea>
        <View style={global.container}>
            <UserInfo userData={userData}/>
        </View>
        </SafeArea>
    )
}