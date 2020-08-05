import React from "react";
import "./App.css";
import "./assets/main.css";
import Homepage from "./containers/HomePage";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Beta from "./containers/Beta";
import Privacy from "./containers/Privacy";
import About from "./containers/About/About";
import Verify from "./containers/Beta/Verify";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/beta" component={Beta} />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Homepage} />
                <Route exact path="/beta/verify" component={Verify} />

                <Route
                    exact
                    path="/discord"
                    component={() => {
                        window.location.replace("https://discord.gg/2rfryZH");

                        return <p className="text-center">Loading...</p>;
                    }}
                />

                <Route
                    exact
                    path="/github"
                    component={() => {
                        window.location.replace("https://github.com/unifey-net");

                        return <p className="text-center">Loading...</p>;
                    }}
                />

                <Route
                    component={() => (
                        <h1 className="text-center text-lg mt-16">
                            That page could not be found.
                        </h1>
                    )}
                />
            </Switch>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
