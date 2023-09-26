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

type TaskForCategoryType = {
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
            }

            if (state.categories.length > 0) {
                console.log(action.payload)
            }
        }
    }
})

export const {setCategory} = todoSlice.actions;

export default todoSlice.reducer
