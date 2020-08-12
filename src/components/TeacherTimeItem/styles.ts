import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  middleContainer: {},
  middleTextContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  middleContainerTitle: {
    color: "#9C98A6",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    lineHeight: 15,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FAFAFC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6F0",
    padding: 10,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  timeContainerDisabled: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FAFAFC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6F0",
    padding: 10,
    paddingHorizontal: 15,
    marginTop: 5,
    opacity: 0.3,
  },
  timeContainerTitle: {
    color: "#6A6180",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    lineHeight: 21,
  },
});

export default styles;
