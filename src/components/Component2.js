import React, { Component } from "react";
import { Spring } from 'react-spring';

const c2Style = {
    background: 'antiquewhite',
    color: 'slategrey',
    padding: '2vw'
}

class Component2 extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 1000, duration: 1000 }}
            >
                {props => (
                    <div style={props}>
                        <div style={c2Style}>
                            <h1>Component2</h1>
                            <p>But I am not able to describe beauty, for after I had seen this view I explored further. Doors, doors, doors everywhere ... and all are locked and bolted! In no place, except via the windows in the castle walls is there an available exit. The castle is a prison, and I am its prisoner!</p>
                        </div>
                    </div>
                )}
            </Spring>
        );
    }
};

export default Component2;