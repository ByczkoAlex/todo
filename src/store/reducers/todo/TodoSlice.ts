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
    taskId: string,
    categoryId: string
}

const initialState: TodoState = {
    disabled: false,
    categories: [
        {
            name: '',
            tasks: [],
            id: ''
        }
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
        },
        setTask(state, action) {
            state.categories = state.categories.map((category: categoryType) => {
                if (category.id === action.payload.categoryId) {
                    return {...category, tasks: [action.payload, ...category.tasks]}
                } else return {...category}
            })
        }
    }
})

export const {setCategory, setTask, deleteCategory} = todoSlice.actions;

export default todoSlice.reducer
