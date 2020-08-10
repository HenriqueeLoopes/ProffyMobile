import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F7",
  },
  headerTop: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
  },
  currentPageSection: {
    color: "#8257E5",
    fontSize: 40,
  },
  nextPageSection: {
    color: "#C1BCCC",
    fontSize: 40,
  },
  topBar: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 35,
  },
  titleText: {
    color: "#32264D",
    maxWidth: 240,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
    lineHeight: 42,
    marginBottom: 10,
  },
  titleDescriptionText: {
    color: "#6A6180",
    maxWidth: 200,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 24,
  },
  bottomBar: {
    backgroundColor: "#F0F0F7",
    flex: 3,
    paddingHorizontal: 30,
    marginTop: 40,
  },
  topText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    color: "#32264D",
    lineHeight: 26,
  },
  criarContaText: {
    color: "#8257E5",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    lineHeight: 24,
  },
  InputContainer: {
    flexDirection: "column",
    backgroundColor: "#FAFAFD",
    borderRadius: 8,
  },
  inputText: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nextButtonContainer: {
      marginVertical: 30,
  },
  nextButton: {
    backgroundColor: "#DCDCE5",
    borderRadius: 8,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonSelected: {
    backgroundColor: "#8257E5",
    borderRadius: 8,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    color: "#9C98A6",
    fontFamily: "Archivo_600SemiBold",
    fontSize: 16,
    lineHeight: 26,
  },
  nextButtonTextSelected: {
    color: "#FFFFFF",
    fontFamily: "Archivo_600SemiBold",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default styles;
