import React from "react"

const CardTasa = ({ moneda, children }) => {
	return (
	      <div className="col-sm-6 col-md-3">
	        <div className="card shadow mb-2">
	          <div className="card-header text-center">
	          <h4>{moneda && moneda.toUpperCase()}</h4>
	        </div>
	          <div className="card-body text-center">
	          	{ children }	         
	          </div>
	        </div>
	      </div>
	)
}

export default CardTasa