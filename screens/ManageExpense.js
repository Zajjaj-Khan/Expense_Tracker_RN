import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import IconButton  from "../components/Ui/IconButton";
const ManageExpense = ({ route, navigation }) => {
  const editedExpenseID = route.params?.expenseId;

  const isEditing = !!editedExpenseID;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  function deleteExpenseHandler() {}
  return (
    <View>
      {isEditing && (
        <IconButton
          icon="trash"
          color={GlobalStyles.colors.error500}
          size={36}
          onPress={deleteExpenseHandler}
        />
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({});
