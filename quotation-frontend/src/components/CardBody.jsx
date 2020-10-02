import React from "react"
import Spinner from "./Spinner"

const CardBody = ({ error, loading, precio }) => {
	
	if(loading){
		return <Spinner />
	}

	if(error){
		return <p className="text-danger">{error}</p>
	}

	return (
	      <>
			<h5 className="card-title">Tasa</h5>
	        <div className="card-text">
	          <h1><span className="badge badge-pill badge-dark">{precio}</span></h1>
	        </div>
		</>
	)
}

export default CardBody