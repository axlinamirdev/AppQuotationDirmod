import React from "react"
import Spinner from "./Spinner";

const CardTasa = ({ loading, moneda, precio}) => {

	return (
	      <div className="col-sm-6 col-md-3">
	        <div className="card shadow">
	          <div className="card-header text-center">
	          <h4>{moneda && moneda.toUpperCase()}</h4>
	        </div>
	          <div className="card-body text-center">
	          	{ 
	          		loading ? (
	          			<Spinner />
	          		) : (
	          			<>
	          				<h5 className="card-title">Tasa</h5>
				            <div className="card-text">
				              <h1><span className="badge badge-pill badge-dark">{precio}</span></h1>
				            </div>
	          			</>
	          		)

	          	}
	            
	          </div>
	        </div>
	      </div>
	)
}

export default CardTasa