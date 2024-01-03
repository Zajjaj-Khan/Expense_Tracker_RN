import { StyleSheet, Text, View,FlatList } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
 const DUMMY_EXPENSES = [
    {
        id:'1',
        description:'A pair of shoes',
        amount:59.99,
        date: new Date('2023-29-12')
    },
    {
        id:'2',
        description:'A pair of handcufs',
        amount:59.99,
        date: new Date('2023-19-12')
    },
    {
        id:'3',
        description:'Bananas for home',
        amount:59.99,
        date: new Date('2023-12-11')
    },
    {
        id:'4',
        description:'A book for pshycology',
        amount:19.99,
        date: new Date('2024-19-01')
    },
    {
        id:'5',
        description:'A pair of shocks',
        amount:10,
        date: new Date('2023-29-09')
    }
 ]
export default function ExpensesOutput({ expenses,expensesPeriod }) {
  return (
    <View style={styles.container}>
      {/* Summary */}
     <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      {/* List of Expenses */}
    <ExpensesList expenses={DUMMY_EXPENSES} />
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
