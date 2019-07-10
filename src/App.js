import React from "react";
import Layout from "./Components/Layout/layout";
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
        return <Layout />;
    }
}

export default App;
