import React from 'react';
import { CounterContext } from '../../App';
import './CounterOutput.css';
import { CounterParentContext } from '../../containers/Counter/Counter';

const counterOutput = (props) => (
    <React.Fragment>
        <div className="CounterOutput">
            {/* <CounterParentContext.Consumer>
                {
                    (context) => (
                        <CounterContext.Consumer>
                        {({counter}) => <span>{ `Current Counter: ${counter} : Context: ${context}`}</span>}
                        </CounterContext.Consumer>
                    )
                }
            </CounterParentContext.Consumer> */}

            <CounterContext.Consumer>
                {({counter}) => <span>{`Current Counter: ${counter} :`}</span>}
            </CounterContext.Consumer>
        </div>
    </React.Fragment>
);

export default counterOutput;