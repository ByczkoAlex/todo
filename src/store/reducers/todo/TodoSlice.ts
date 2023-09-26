import {createSlice} from "@reduxjs/toolkit";

type TodoState = {
    disabled: boolean
    categories: Array<categoryType>
}

type categoryType = {
    name: string,
    tasks: Array<TaskForCategoryType>
}

type TaskForCategoryType = {
    name: string,
    id: string
}

const initialState: TodoState = {
    disabled: false,
    categories: [
        {
            name: '',
            tasks: []
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

    }
})

export const {} = todoSlice.actions;

export default todoSlice.reducer
