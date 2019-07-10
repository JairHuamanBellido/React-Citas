import React, { Fragment } from "react";
import "./global.css";
import Form from "../Form/form";
import ListCitas from "../ListCitas/ListCitas";
import Header from "../header/Header";
class layout extends React.Component {
    state = {
        citas: []
    };

    newCita = datos => {
        const CIT = [...this.state.citas, datos];
        this.setState({
            citas: CIT
        });
    };

    render() {
        return (
            <Fragment>
                <div className="main">
                    <div className="Header">
                        <Header />
                    </div>
                    <div className="body-layout">
                        <Form newCita={this.newCita} />
                        <ListCitas citas={this.state.citas} />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default layout;
