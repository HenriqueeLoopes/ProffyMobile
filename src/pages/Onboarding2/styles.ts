import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F7",
  },
  topBar: {
    backgroundColor: "#04D361",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  bottomBar: {
    backgroundColor: "#FFF",
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  banner: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  estudarIcon: {
    width: 150,
    height: 150,
  },
  numberBottom: {
    fontFamily: "Archivo_400Regular",
    fontSize: 40,
    color: "#6A6180",
    opacity: 0.3,
    lineHeight: 44,
  },
  textBottom: {
    paddingVertical: 30,
    fontFamily: "Poppins_400Regular",
    color: "#6A6180",
    fontSize: 24,
    lineHeight: 34,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  currentPageIndicator: {
    fontFamily: "Archivo_700Bold",
    color: "#8257E5",
    fontSize: 40,
    lineHeight: 34,
  },
  othersPageIndicator: {
    fontFamily: "Archivo_700Bold",
    color: "#C1BCCC",
    fontSize: 40,
    lineHeight: 34,
  },
  nextButton: {
    transform: [{ rotateY: "180deg" }],
  },
  nextIcon: {
    padding: 20,
  },
});

export default styles;
