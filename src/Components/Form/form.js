import React from "react";
import Field from "../field/Field.js";
import "./form.css";
/**
    @IMPORTANTE !!!
    
    * Los nombres de los campos Datos deben ser iguales los valores 
        que de labelName que se les pasa a los <Field />

    @ EJM
    state = {
        datos:{
            Nombre: ""
            Apellido: ""         
        }
    }
    
    <Field labelName = "Nombre"/>
    <Field labelName = "Apellido"/>
    



    @PROPS_EVENTS

        @newCita 
            Params  (Cita : Objeto cita  del state )
            Evento que se pasa al padre para guardar el objeto lista en su array




 */

export default class Form extends React.Component {
    state = {
        Cita: {
            Nombre: "",
            Apellido: "",
            Correo: "",
            Fecha:"",
            DNI: "",
            Telefono:""
        },
        completed: false
    };

    /*  Evento a la escucha del hijo cuando se modifica 
        un campo y acutaliza el campo en el Objeto Cita
    */
    newCita = inputElement => {
        this.setState({
            Cita: {
                ...this.state.Cita,
                [inputElement.target.name]: inputElement.target.value
            }
        });
    };

    /*  Evento a la escucha del hijo cuando se ha completado el
        limpieado todos los inputs o Field del Form
    */
    resetForm = () => {
        this.setState({ completed: false });
    };

    // Evento a la escucha de un Submit del form
    handleSubmit = e => {
        e.preventDefault();

        let cita = this.state.Cita;

        this.props.newCita(cita);
        this.setState({
            completed: true,
            Cita: {
                Nombre: "",
                Apellido: "",
                Correo: "",
                Fecha: "",
                DNI: "",
                Telefono: ""
            }
        });
    };

    render() {
        return (
            <div className="FC-Main">
                <div className="formContainer">
                    <header>
                        <h1>CIT ONLINE</h1>
                        <p>El mejor sitio de citas</p>
                    </header>
                    <form onSubmit={this.handleSubmit}>
                        <div className="field">
                            <Field
                                labelName="Nombre"
                                newCita={this.newCita}
                                isPassword={false}
                                reset={this.state.completed}
                                eventResetForm={this.resetForm}
                            />
                            <Field
                                labelName="Apellido"
                                newCita={this.newCita}
                                reset={this.state.completed}
                                eventResetForm={this.resetForm}
                            />
                        </div>
                        <div className="field">
                            <Field
                                labelName="Correo"
                                newCita={this.newCita}
                                reset={this.state.completed}
                                eventResetForm={this.resetForm}
                            />
                            <Field
                                labelName="Fecha"
                                newCita={this.newCita}
                                reset={this.state.completed}
                                eventResetForm={this.resetForm}
                            />
                        </div>
                        <div className="field">
                            <Field
                                labelName="DNI"
                                newCita={this.newCita}
                                reset={this.state.completed}
                                eventResetForm={this.resetForm}
                            />
                            <Field
                                labelName="Telefono"
                                newCita={this.newCita}
                                reset={this.state.completed}
                                eventResetForm={this.resetForm}
                            />
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        );
    }
}
