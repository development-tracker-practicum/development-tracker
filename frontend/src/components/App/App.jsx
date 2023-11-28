import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Authorization from '../../pages/Authorization/Authorization';

import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/signup"
                    element={<Authorization submitText="Регистрация" />}
                />
                <Route
                    path="/signin"
                    element={
                        <Authorization path="/signin" submitText="Войти" />
                    }
                />
            </Routes>
        </div>
    );
}

export { App };
