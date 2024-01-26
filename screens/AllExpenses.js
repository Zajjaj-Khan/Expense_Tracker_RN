import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";
const AllExpenses = ({navigation}) => {
  const expensesCtx = useContext(ExpenseContext)
  const pressHandler = () =>{
    navigation.navigate('ManageExpense')
  }
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='Total'/>

  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
