import React from "react";
import Counter from "./Counter";
import {connect} from 'react-redux';
import {addCounter, resetAllCounters} from "../store/actionCreator";

const App = ({state: counters, addCounter, resetAllCounters}) => {

    const getCounters = () => {
        return counters.map(({id}) => <Counter key={id} id={id}/>);
    };

    return (
        <div>
            <h2>Counters</h2>
            {getCounters()}
            <button className="btn btn-info mr-3" onClick={addCounter}>Add Counter</button>
            <button className="btn btn-secondary" onClick={resetAllCounters}>Reset All</button>
        </div>
    );
};

const mapStateToProps = (state) => ({state});
const mapDispatchToProps = {addCounter, resetAllCounters};

export default connect(mapStateToProps, mapDispatchToProps)(App);