import React, { useEffect } from "react"
import moment from "moment"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import CardTasa from "./components/CardTasa"
import CardBody from "./components/CardBody"

import { useDispatch, useSelector } from "react-redux"
import { fetchTasaDolar, fetchTasaEuro, fetchTasaReal } from "./actions/tasaAction"


function App() {
  const dispatch = useDispatch()

  const { tasaDolar, 
          tasaEuro, 
          tasaReal,
          loadingDolar, 
          loadingEuro, 
          loadingReal,
          errorDolar,
          errorEuro,
          errorReal 
        } = useSelector((state) => state.tasaReducer)

  useEffect(() => {
      setInterval(
        () => {
          dispatch(fetchTasaDolar())
          dispatch(fetchTasaEuro())
          dispatch(fetchTasaReal())
        },
        5000
      )
  }, [dispatch])

  return (
        <div className="container">
          <div className="row">
            <div className="col-12 text-center text-white mt-5">
              <h1>Cotización Dirmod v1.3</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-right text-white">
              <h5>Fecha: <span className="font-italic">{moment().format("DD/MM/YYYY")}</span></h5>
              <h5>Hora: <span className="font-italic">{moment().format("hh:mm a")}</span></h5>
            </div>
          </div>

          <div className="row d-flex justify-content-center pt-5 pb-5">
            <CardTasa moneda={tasaDolar.moneda} >
              <CardBody
                      precio={tasaDolar.precio}
                      loading={loadingDolar}
                      error={errorDolar}
                     />
            </CardTasa>
            <CardTasa moneda={tasaEuro.moneda} >
                <CardBody
                      precio={tasaEuro.precio}
                      loading={loadingEuro}
                      error={errorEuro}
                     />
            </CardTasa>
            <CardTasa moneda={tasaReal.moneda} >
                <CardBody
                      precio={tasaReal.precio}
                      loading={loadingReal}
                      error={errorReal}
                     />
            </CardTasa>
          </div>

          <div className="row">
            <div className="col-12 text-right">
              <footer className="blockquote-footer text-white">Desarrollado por: <cite title="Source Title">Axlin Miranda</cite></footer>
              <footer className="blockquote-footer text-white">Backend: <cite title="Source Title">C# .Net Core</cite></footer>
              <footer className="blockquote-footer text-white">Frontend: <cite title="Source Title">React y Redux</cite></footer>
            </div>
          </div>

        </div>


  );
}

export default App;
