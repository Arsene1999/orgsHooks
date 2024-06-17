import React, { Fragment } from "react";
import Topo from './components/Topo'
import Produtores from "./components/Produtores";

const Home =() => {
    return (
    <Fragment>
        <Produtores topo={Topo}/>
    </Fragment>)
}

export default Home;
