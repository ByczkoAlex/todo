import {AppDispatch} from "../store";
import {categoryType, deleteCategory, setCategory} from "../reducers/todo/TodoSlice";

export const createCategoryThunk = (category: categoryType) => (dispatch: AppDispatch) => {
    try {
        dispatch(setCategory(category))
    } catch (e) {
        console.error(e)
    }
}

export const deleteCategoryThunk = (id: string) => (dispatch: AppDispatch) => {
    console.log('here')
    try {
        dispatch(deleteCategory(id))
    } catch (e) {
        console.error(e)
    }
}
