import React, { Fragment } from "react";
import Form from "./Components/Form/form.js";
import Citalista from "./Components/ListCitas/ListCitas.js";
class App extends React.Component {
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
                <Form newCita={this.newCita} />
                <Citalista citas={this.state.citas}/>
            </Fragment>
        );
    }
}

export default App;
