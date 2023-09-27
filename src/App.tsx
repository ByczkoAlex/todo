import React from 'react';
import s from './App.module.css';
import Form from "./components/Form/Form";
import {useAppSelector} from "./hooks/redux";
import Category from "./components/Category/Category";
import {categoryType} from "./store/reducers/todo/TodoSlice";

function App() {

    const CategoryArray = useAppSelector(state => state.todoReducer.categories)

    return (
        <div className={s.app}>
            <div className={s.form_wrapper}>
                <Form/>
            </div>
            <div className={s.tasks_list_wrapper}>
                {
                    CategoryArray?.map((category: categoryType) =>
                        <Category key={category.id}
                                  id={category.id}
                                  name={category.name}
                                  tasks={category.tasks}
                                  creationDate={category.creationDate}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default App;
