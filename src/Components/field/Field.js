import React from 'react';

export default class Field extends React.Component{

    state={
        value: ''
    }
    
    handleChange  = (e)=>{
        console.log("Escribiendo")
        this.setState( {value:e.target.value})
        this.props.newCita(e)
    }
    render(){
        return(
            <div>
                <label>{this.props.labelName}</label>
                <input 
                type="text"
                placeholder={`Ingrese su ${this.props.labelName}`} 
                name={this.props.labelName}
                onChange={this.handleChange}
                value={this.state.value}
                />
            </div>
        )
    }
}