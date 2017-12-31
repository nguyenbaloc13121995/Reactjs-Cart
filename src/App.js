import React, { Component } from 'react';
import Header from './components/Header'
import Productscontainers from './containers/containersProduct'
import Cartcontainers from './containers/containersCart'
import Messagecontainers from './containers/containersMessage'
import Footer from './components/Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <Productscontainers />
                        <Messagecontainers />
                        <Cartcontainers />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
