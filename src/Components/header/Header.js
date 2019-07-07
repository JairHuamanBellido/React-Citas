import React from 'react';


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
            <header>{this.state.TituloHeader}</header>

        )
    }
}