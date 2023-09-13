import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 30,
        paddingRight: 0,
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#AFAFAF'
    },
    button: {
        width: '80%'
    },
    containerContent: {
        display: 'flex',
        gap: 15,
        width: '50%'
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        height: 150,
        borderRadius: 10,
    },

    imageFull: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        height: 250,
        borderRadius: 10,
    },
    containerCard: {
        display: 'flex',
        flexDirection: 'row'
    }

});
