import {createSlice} from "@reduxjs/toolkit";

type TodoStateType = {
    disabled: boolean
    categories: Array<categoryType>
}

export type categoryType = {
    name: string,
    tasks: Array<TaskForCategoryType>
    id: any
    creationDate: string
}

export type TaskForCategoryType = {
    name: string
    taskId: string
    categoryId: string
    creationDate: string
}

const initialState: TodoStateType = {
    disabled: false,
    categories: [
        {
            name: '',
            tasks: [],
            id: '',
            creationDate: ''
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
        },
        deleteTask(state, action) {
            state.categories = state.categories.map((category: categoryType) => {
                if (category.id === action.payload.categoryId) {
                    return {...category, tasks: category.tasks.filter((t) => t.taskId !== action.payload.taskId)}
                } else return {...category}
            })
        },
        editTask(state, action) {
            state.categories = state.categories.map((category: categoryType) => {
                if (category.id === action.payload.task.categoryId) {
                    return {...category, tasks: category.tasks.map((t) => t.taskId === action.payload.task.taskId ?  {...t, name: action.payload.title} : t)}
                } else return {...category}
            })
        },
    }
})

export const {setCategory, setTask, deleteCategory, deleteTask, editTask} = todoSlice.actions;

export default todoSlice.reducer
