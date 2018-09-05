import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import App, { CounterContext } from '../../App';
import { ActionTypes } from '../../store/ActionTypes';
// export const  NewContext  = React.createContext(null);

export const CounterParentContext = React.createContext(null);

class Counter extends Component {
    state = {
        text: {
            name: 'Context API',
            description: 'Implementation of context api'
        }
}

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //             default:
    //             console.log('default');
    //     }
    // }

    render () {
        const text = {
            name: this.state.text.name,
            desc: this.state.text.description
        }
        console.log();
        return (
            <div>
                <CounterParentContext.Provider value={text.name}>
                    <CounterOutput/>
                </CounterParentContext.Provider>
                 {/* <CounterOutput value={this.props.ctr}/> */}
                {/* <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdditionCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractionCounter}  /> */}
                {/* <Consumer>
                    {({name, description})=> <span> {`Name: ${name}`} </span>}
                </Consumer> */}
                <CounterContext.Consumer>
                    {({dispatch}) => {
                        return (
                            <div>
                                <CounterControl label="Increment" clicked={()=>dispatch({ type: ActionTypes.INC })} />
                                <CounterControl label="Decrement" clicked={()=>dispatch({ type: ActionTypes.DEC })} />
                                <CounterControl label="Add 5" clicked={()=>dispatch({ type: ActionTypes.ADD, value: 5 })} />
                                <CounterControl label="Subtract 3" clicked={()=>dispatch({ type: ActionTypes.SUB, value: 3 })} />
                            </div>
                        ); 
                     }}
                </CounterContext.Consumer>
                            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAdditionCounter: () => dispatch({type: 'ADD', value: 5}),
        onSubtractionCounter: () => dispatch({type: 'SUBTRACTION', value: 5})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);