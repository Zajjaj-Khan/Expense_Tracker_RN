import { createContext, useReducer } from "react"

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

export const ExpenseContext = createContext({
    expenses:[],
    addExpense:({description,amount,date})=>{},
    updateExpense: (id,{description,amount,date})=>{},
    deleteExpense: (id)=>{},
});

function expenseReducer(state,action){
    switch(action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.paylaod,id:id},...state]
        case 'DELETE':
            return state.filter(expense => expense.id !== action.payload)
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense)=> expense.id === action.paylaod.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updateItem = {...updatableExpense,...action.paylaod.data}
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updateItem;

        default:
            return state;
    }
}

function ExpenseContextProvider({children}){
    const [expenseState,dispatch]=useReducer(expenseReducer,DUMMY_EXPENSES);
    function addExpense(expenseData){
        dispatch({type: 'ADD', payload:expenseData});
    };
    function deleteExpense(id){
        dispatch({type: 'ADD', payload:id});
    }
    function updateExpense(id,expenseData){
        dispatch({type: 'UPDATE', payload:{id:id,data:expenseData}});
    }
    const value = {
        expenses: expenseState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };
    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
};

export default ExpenseContextProvider;