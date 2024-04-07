import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/Ui/IconButton";
import Buttons from "../components/Ui/Buttons";
import { ExpenseContext } from "../store/expense-context";
import ExpenseForm from "../ManageExpense/ExpenseForm";
const ManageExpense = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpenseContext);
  const editedExpenseID = route.params?.expenseId;
  const isEditing = !!editedExpenseID;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editedExpenseID);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    navigation.goBack();
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseID, {
        description: "Test!!!",
        amount: 14.88,
        date: new Date("2022-05-20"),
      });
    } else {
      expenseCtx.addExpense({
        description: "Test",
        amount: 14.88,
        date: new Date("2022-05-20"),
      });
    }
  }

  return (

    <View style={styles.container}>
      <ExpenseForm onCancel={cancelHandler} submitButtonLabel={isEditing? 'Update': "Add"}/>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  
});
