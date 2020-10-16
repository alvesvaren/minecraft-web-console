import React from "react";
import "./app.scss";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {};
    }
    render() {
        return <div></div>;
    }
}

export default App;
