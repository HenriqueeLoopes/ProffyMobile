import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
    justifyContent: "center",
    padding: 30,
  },
  header: {
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImg: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  profileName: {
    marginLeft: 5,
    color: '#D4C2FF',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    lineHeight: 24,
  },
  logoutIcon: {

  },
  topContainer: {
    flex: 1,
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },
  bottomContainer: {
    backgroundColor: '#FFF',
    flex: 2,
  },
  title: {
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },
  button: {
    height: 150,
    width: "48%",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },
  buttonPrimary: {
    backgroundColor: "#9871F5",
  },
  buttonSecondary: {
    backgroundColor: "#04D361",
  },
  buttonText: {
      fontFamily: 'Archivo_700Bold',
      color: '#FFF',
      fontSize: 20,
  },
  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: '#D4C2FF',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 30,
  },
});

export default styles;
