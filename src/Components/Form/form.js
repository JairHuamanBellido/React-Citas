import React from 'react';
import Field from "../field/Field.js";
export default class Form extends React.Component{

    state = {
        datos:{
            Nombre:'',
            Apellido:''
        }
    }
    newCita = (datos)=>{
        console.log(datos.target.name)
        this.setState({
            datos:{
                ...this.state.datos,
                [datos.target.name]:datos.target.value
            }
        })
    }
    render(){
        return(
            <form>
                <Field 
                labelName="Nombre"
                newCita={this.newCita}
                />
           <Field 
                labelName="Apellido"
                newCita={this.newCita}
                />
      

            </form>
        )
    }
}