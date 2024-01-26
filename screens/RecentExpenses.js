import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput'
import { ExpenseContext } from '../store/expense-context'
import { getDateMinusDays } from '../utils/date'
const RecentExpenses = () => {
  const expenseCtx = useContext(ExpenseContext)
  const recentExpenses = expenseCtx.expenses.filter((expense)=>{
    const today = new Date();
    const pastDates = getDateMinusDays(today,7);
    return expense.date > pastDates
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 days'/>
}

export default RecentExpenses

const styles = StyleSheet.create({})