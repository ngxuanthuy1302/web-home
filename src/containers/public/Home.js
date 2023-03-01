import React, { useEffect } from "react";
import { Header, Slider } from "../../components";
import * as apis from '../../api'

const Home = () => {
    return (
        <div className="home">
            <div>
                <Header />
            </div>
            <Slider />
        </div>
    )
}
export default Home