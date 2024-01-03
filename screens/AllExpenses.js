import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
const AllExpenses = ({navigation}) => {
  const pressHandler = () =>{
    navigation.navigate('ManageExpense')
  }
  return (
    <ExpensesOutput expensesPeriod='Total'/>

  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
