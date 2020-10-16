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
        return (
            <div className="app-root">
                <header id="status-area"></header>
                <main id="content-area">
                    <section id="console-area"><textarea readOnly id="console-field"></textarea></section>
                    <section id="sidebar-area">
                        <ul>
                            <li>Player 1</li>
                        </ul>
                    </section>
                </main>

                <form id="command-area" onSubmit={e => e.preventDefault()}>
                    <input id="command-field" type="text" placeholder="command or ? for help" />
                    <input type="submit" value="Send"/>
                </form>
            </div>
        );
    }
}

export default App;
