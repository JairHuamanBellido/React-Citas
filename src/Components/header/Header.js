import React from 'react';
import './header.css'

export default class Header extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            TituloHeader:'Reserva tu cita'
        }
    }

    render(){


        return(
            <header className="HC-header">
            <h1>{this.state.TituloHeader}</h1>
            </header>

        )
    }
}