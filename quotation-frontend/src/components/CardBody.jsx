import React from "react"
import Spinner from "./Spinner";

const CardBody = ({ error, loading, precio}) => {
	if(error){
		return <p className="text-danger">{error}</p>
	}

	if(loading){
		return <Spinner />
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