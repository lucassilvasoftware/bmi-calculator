import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contextBMI: {
    flex: 1,
    marginTop: 15,
    paddingTop: 30,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  resultBMI: {
    fontSize: 48,
    color: "#3EB489",
    fontWeight: "bold",
  },
  titleResultIMC: {
    fontSize: 18,
    color: "#3EB489",
    fontWeight: "bold",
  },
  shareButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  shared: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedText: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
});

export default styles