import React from "react";
import {connect} from 'react-redux';
import {decreaseRange, decrement, deleteCounter, increaseRange, increment, resetCounter} from "../store/actionCreator";

const Counter = ({state, id, deleteCounter, increment, decrement, resetCounter, increaseRange, decreaseRange}) => {

    const counter = state.filter(el => el.id === id)[0];

    const plusButtons = () => counter.range.map(v => {
        return <button className="btn btn-outline-info" onClick={() => increment({id, v})} key={`+${v}`}>+{v}</button>;
    });

    const minusButtons = () => counter.range.map(v => {
        return <button className="btn btn-outline-info" onClick={() => decrement({id, v})} key={`-${v}`}>-{v}</button>;
    }).reverse();

    return (
        <React.Fragment>
            <div className="counter">
                <div className="btn-group">
                    {minusButtons()}
                </div>
                <span>{counter.currentValue}</span>
                <div className="btn-group">
                    {plusButtons()}
                </div>
                <br/>
                <button className="btn btn-secondary btn-sm m-3" onClick={() => decreaseRange(id)}>
                    <i className="fa fa-minus-circle"/></button>
                Range
                <button className="btn btn-secondary btn-sm m-3" onClick={() => increaseRange(id)}>
                    <i className="fa fa-plus-circle plus"/></button>
                <br/>
                <div className="btn-group">
                    <button className="btn btn-info" onClick={() => resetCounter(id)}>Reset</button>
                    <button className="btn btn-secondary" onClick={() => deleteCounter(id)}>Delete</button>
                </div>
            </div>
            <br/>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({state});
const mapDispatchToProps = {deleteCounter, increment, decrement, resetCounter, increaseRange, decreaseRange};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);