import { TextInput } from "react-native";
import style from "./style";

export default function TextArea({ lines, placeholder, onChange, value, keyboardType, multiline, height }) {
    return (
        <TextInput
            multiline={multiline}
            numberOfLines={lines}
            placeholder={placeholder}
            blurOnSubmit={true}
            style={[style.textArea, { height: height }]}
            onChange={onChange}
            value={value}
            keyboardType={keyboardType}
            returnKeyType={keyboardType == 'number-pad' ? 'done' : 'next'}
        />
    )
}