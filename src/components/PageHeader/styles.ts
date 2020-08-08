import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 25,
        backgroundColor: "#8257e5",
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginTop: 20,
        marginBottom: 40,
    },
});

export default styles;