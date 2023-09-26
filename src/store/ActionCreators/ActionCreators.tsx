import {AppDispatch} from "../store";
import {categoryType, setCategory} from "../reducers/todo/TodoSlice";

export const CreateCategory = (category: categoryType) => (dispatch: AppDispatch) => {
    try {
        dispatch(setCategory(category))
    } catch (e) {
        console.error(e)
    }
}
