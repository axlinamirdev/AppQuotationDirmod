import React from "react"


const CardTasa = ({ moneda, precio}) => {
	return (
		<div>
	        <p>{moneda}</p>
	        <p>{precio}</p>
	      </div>
	)
}

export default CardTasa