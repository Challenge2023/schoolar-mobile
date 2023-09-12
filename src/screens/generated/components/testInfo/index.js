import { View } from "react-native";
import RegularText from "../../../../components/texts";
import Colors from "../../../../theme/colors";
import Size from "../../../../theme/typography";
import style from "./style";

export default function TestInfo({ TestData }) {
    return (
        <View>
            {TestData.map((data, index) => (
                <View style={style.container}>
                    <RegularText
                        key={`${index}_text`}
                        weight="SemiBold"
                        color={Colors.primary}
                        fontSize={Size.text.medium}
                        content={`${data.label}: `}
                    />
                    <RegularText
                        key={`${index}_desc`}
                        weight="SemiBold"
                        color={Colors.textLight}
                        fontSize={Size.text.medium}
                        content={data.value}
                    />
                </View>
            ))}
        </View>
    )

}