import React, { useEffect } from 'react';
import CardTasa from "./components/CardTasa"
import './App.css';

import { useDispatch } from "react-redux"
import {fetchTasaDolar} from "./actions/tasaAction"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchTasaDolar("dolar"))
  }, [])

  return (
    <div className="App">
      <CardTasa />
      <CardTasa />
      <CardTasa />
    </div>
  );
}

export default App;
