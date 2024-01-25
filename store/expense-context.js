import { createContext, useReducer } from "react"


export const ExpenseContext = createContext({
    expenses:[],
    addExpense:({description,amount,date})=>{},
    updateExpense: (id,{description,amount,date})=>{},
    deleteExpense: (id)=>{},
});

function expenseReducer(state,action){
    switch(action.type){
        case 'ADD':
            return [{...action.paylaod},...state]
        case 'DELETE':
        case 'UPDATE':
        default:
            return state;
    }
}

function ExpenseContextProvider({children}){
    const [expenseState,dispatch]=useReducer(expenseReducer);
    function addExpense(expenseData){
        dispatch({type: 'ADD', payload:expenseData});
    };
    function deleteExpense(id){
        dispatch({type: 'ADD', payload:id});
    }
    return <ExpenseContext.Provider>{children}</ExpenseContext.Provider>
};

export default ExpenseContextProvider;