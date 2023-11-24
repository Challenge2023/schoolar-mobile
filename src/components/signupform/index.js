import { View, TextInput } from 'react-native';
import styles from './style';
import RegularText from '../texts';
import Colors from '../../theme/colors';
import { TextInputMask } from 'react-native-masked-text';

export default function SignUpForm({ formItems }) {
  return (
    <View style={styles.container}>
      {formItems.map((item, index) => (
        <View View key={index} style={{ marginBottom: 25 }}>
          <RegularText weight='Regular' color={Colors.textLight} fontSize={12} content={item.label} />
          {item.hasMask ?
            <TextInputMask
              onChangeText={(e) => item.CallBack(item.name, e)}
              value={item.value}
              placeholder={item.placeholder}
              style={[styles.input, { borderWidth: 1, borderColor: item.error != '' ? Colors.error : Colors.inputBackground }]}
              type={item.typeMask}
              options={{
                format: 'DD/MM/YYYY',
              }}
            /> :
            <TextInput
              onChangeText={(e) => item.CallBack(item.name, e)}
              value={item.value}
              placeholder={item.placeholder}
              style={[styles.input, { borderWidth: 1, borderColor: item.error != '' ? Colors.error : Colors.inputBackground }]}
              keyboardType={item.keyboard}
              maxLength={item.max}
              secureTextEntry={item.secure}
            />
          }
          {item.error != '' ? <RegularText weight='Regular' color={Colors.error} fontSize={8} content={item.error} /> : ''}
        </View>
      ))
      }
    </View >
  );
}
