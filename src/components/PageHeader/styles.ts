import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8257e5",
    },
    topBar: {
        paddingTop: 40,
        backgroundColor: '#774DD6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 5,
        borderWidth: 1,
        borderColor: '#6842C2',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    headerText: {
        marginLeft: 20,
        color: '#D4C2FF',
        fontSize: 14,
        lineHeight: 15,
        textAlign: "center",
        fontFamily: 'Archivo_600SemiBold'
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