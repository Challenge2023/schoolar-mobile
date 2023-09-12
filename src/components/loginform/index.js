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
            value={item.label === 'E-mail corporativo' ? item.username : item.password}
            onChangeText={item.label === 'E-mail corporativo' ? item.handleUsernameChange : item.handlePasswordChange}
            secureTextEntry={item.label !== 'E-mail corporativo'}
          />
        </View>
      ))}
    </View>
  );
}
