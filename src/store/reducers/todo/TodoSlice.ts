import {createSlice} from "@reduxjs/toolkit";

type TodoState = {
    disabled: boolean
    categories: Array<categoryType>
}

export type categoryType = {
    name: string,
    tasks: Array<TaskForCategoryType>
    id: any
}

export type TaskForCategoryType = {
    name: string,
    id: string
}

const initialState: TodoState = {
    disabled: false,
    categories: [
        // {
        //     name: '',
        //     tasks: [],
        //     id: ''
        // }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setCategory(state, action) {
            if (state.categories.length === 0) {
                state.categories = [action.payload]
            } else {
                state.categories.push(action.payload)
            }
        },
        deleteCategory(state, action) {
            state.categories = state.categories.filter((category) => category.id !== action.payload)
        }
    }
})

export const {setCategory, deleteCategory} = todoSlice.actions;

export default todoSlice.reducer
