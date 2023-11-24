import { View, TextInput } from 'react-native';
import styles from './style';
import RegularText from '../texts';
import Colors from '../../theme/colors';
import Size from '../../theme/typography';

export default function LoginForm({ formItems }) {
  return (
    <View style={styles.container}>
      {formItems.map((item, index) => (
        <View key={index} style={{ marginBottom: 25 }}>
          <RegularText weight='Regular' color={Colors.textLight} fontSize={Size.text.small} content={item.label} />
          <TextInput
            style={styles.input}
            placeholder={item.placeholder}
            value={item.set}
            onChangeText={item.handleChange}
            secureTextEntry={item.label === 'Senha'}
            keyboardType={item.label === 'Token' ? 'number-pad' : 'default'}
            returnKeyType='done'
          />
        </View>
      ))}
    </View>
  );
}
