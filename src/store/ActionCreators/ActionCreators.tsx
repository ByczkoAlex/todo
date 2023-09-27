import {AppDispatch} from "../store";
import {categoryType, deleteCategory, setCategory, setTask, TaskForCategoryType} from "../reducers/todo/TodoSlice";

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

export const CreateTaskThunk = (task: TaskForCategoryType) => (dispatch: AppDispatch) => {
    try {
        dispatch(setTask(task))
    } catch (e) {
        console.error(e)
    }
}
