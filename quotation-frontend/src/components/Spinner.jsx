import React from "react"

const Spinner = () => {
	return (
	      <>
	      	<div className="spinner-grow text-secondary" role="status">
			  <span className="sr-only">Loading...</span>
			</div>
			<div className="spinner-grow text-secondary" role="status">
			  <span className="sr-only">Loading...</span>
			</div>
			<div className="spinner-grow text-secondary" role="status">
			  <span className="sr-only">Loading...</span>
			</div>
			<p className="font-italic">Cargando...</p>
	      </>
	)
}

export default Spinner

