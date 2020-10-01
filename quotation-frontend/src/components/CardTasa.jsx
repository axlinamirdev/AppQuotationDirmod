import React from "react"

import { useSelector } from "react-redux"

const CardTasa = () => {
	const tasaDolar = useSelector((state) => state.tasaReducer.tasaDolar)
	console.log(tasaDolar)
	return (
		<div>
	        <p>{tasaDolar.moneda}</p>
	        <p>{tasaDolar.precio}</p>
	      </div>
	)
}

export default CardTasa