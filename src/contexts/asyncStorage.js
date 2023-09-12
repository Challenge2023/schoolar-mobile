import AsyncStorage from '@react-native-async-storage/async-storage';

export const SaveUserData = async (userData) => {
    try {
        await AsyncStorage.setItem('userData', userData);
    } catch (error) {
        console.error('Erro ao salvar os dados do usuário:', error);
    }
};

export const GetUserData = async () => {
    try {
        const userDataJSON = await AsyncStorage.getItem('userData');
        console.log(userDataJSON)
        if (userDataJSON !== null) {
            return userDataJSON
        }
    } catch (error) {
        console.error('Erro ao recuperar os dados do usuário:', error);
    }
};
