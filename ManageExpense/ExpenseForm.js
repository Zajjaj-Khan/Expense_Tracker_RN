import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Buttons from "../components/Ui/Buttons";
function ExpenseForm({onCancel,onSubmit,submitButtonLabel}) {
  const [inputValue, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });
  function inputChangedHandler(inputIdentifier, enteredAmount) {
    setInputValue((currInputVal) => {
      return {
        ...currInputVal,
        [inputIdentifier]: enteredAmount,
      };
    });
  }
  const submitHandle =  () =>{

  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            KeyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputChangedHandler.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autocorrect: false,
        }}
      />
       <View style={styles.buttons}>
        <Buttons style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Buttons>
        <Buttons style={styles.button} onPress={submitHandle}>
        {submitButtonLabel}
        </Buttons>
      </View>
    </View>
  );
}
export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontWeight: "bold",

    color: "white",
    fontSize: 28,
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
    textAlign: "center",
  },
});
