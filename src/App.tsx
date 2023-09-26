import React from 'react';
import s from './App.module.css';
import Form from "./components/Form/Form";

function App() {
  return (
    <div className={s.app}>
        <div className={s.form_wrapper}>
            <Form/>
        </div>
        <div>

        </div>
    </div>
  );
}

export default App;
