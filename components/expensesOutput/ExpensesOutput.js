import { StyleSheet, Text, View,FlatList } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
 
export default function ExpensesOutput({ expenses,expensesPeriod }) {
  return (
    <View style={styles.container}>
      {/* Summary */}
     <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
      {/* List of Expenses */}
    <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700
    }
});
