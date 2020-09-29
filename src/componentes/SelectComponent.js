import React from 'react';

const SelectComponent = (props) => {

	//console.log("propsprops",props.mascota);
	const {nombre, raza,edad,especie, sexo, peso, propietario,_id} = props.mascota;
	return (
		<React.Fragment>
			<option value={_id} >{nombre} - {raza}</option>
		</React.Fragment>
	)
}

export default SelectComponent;