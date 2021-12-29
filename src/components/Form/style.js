import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
    height: "auto",
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90 %",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  textButtonCalc: {
    fontSize: 20,
    color: "#fff",
  },
  buttonCalc: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#3EB489",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exebitionResultBMI: {
    width: "100 %",
    height: "50 %",
  },
  resultBmiItem: {
    fontSize: 22,
    color: "green",
    height: 50,
    width: "100%",
    paddingRight: 20,
  },
  textResultItemList: {
    fontSize: 16,
    color: "green",
  },
  listBmi: {
    marginTop: 20,
  },
});

export default styles