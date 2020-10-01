import React, { useEffect } from 'react';
import CardTasa from "./components/CardTasa"
import './App.css';

import { useDispatch, useSelector } from "react-redux"
import {fetchTasaDolar} from "./actions/tasaAction"

function App() {
  const dispatch = useDispatch()

  const { tasaDolar, tasaEuro, tasaReal } = useSelector((state) => state.tasaReducer)

  useEffect(() => {
      /**setInterval(
        () => {
          dispatch(fetchTasaDolar("dolar"))
          dispatch(fetchTasaDolar("euro"))
          dispatch(fetchTasaDolar("real"))
        },
        5000
      )**/

      dispatch(fetchTasaDolar("dolar"))
      //dispatch(fetchTasaDolar("euro"))
      //dispatch(fetchTasaDolar("real"))
  }, [dispatch])

  return (
    <div className="App">
      <CardTasa {...tasaDolar} />
      <CardTasa {...tasaEuro} />
      <CardTasa {...tasaReal} />
    </div>
  );
}

export default App;
