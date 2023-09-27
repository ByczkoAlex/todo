import {AppDispatch} from "../store";
import {
    categoryType,
    deleteCategory,
    deleteTask, editTask,
    setCategory,
    setTask,
    TaskForCategoryType
} from "../reducers/todo/TodoSlice";

export const createCategoryThunk = (category: categoryType) => (dispatch: AppDispatch) => {
    try {
        dispatch(setCategory(category))
    } catch (e) {
        console.error(e)
    }
}

export const deleteCategoryThunk = (id: string) => (dispatch: AppDispatch) => {
    try {
        dispatch(deleteCategory(id))
    } catch (e) {
        console.error(e)
    }
}

export const createTaskThunk = (task: TaskForCategoryType) => (dispatch: AppDispatch) => {
    try {
        dispatch(setTask(task))
    } catch (e) {
        console.error(e)
    }
}

export const deleteTaskThunk = (task: TaskForCategoryType) => (dispatch: AppDispatch) => {
    try {
        dispatch(deleteTask(task))
    } catch (e) {
        console.error(e)
    }
}

export const editTaskThunk = (title: string, task: TaskForCategoryType) => (dispatch: AppDispatch) => {
    try {
        dispatch(editTask({title ,task}))
    } catch (e) {
        console.error(e)
    }
}
