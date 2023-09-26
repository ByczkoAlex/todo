import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux';
import todoReducer from './reducers/todo/TodoSlice'

const rootReducer = combineReducers({
    todoReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch
