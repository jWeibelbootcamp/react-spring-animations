import React, { Component } from "react";
import { Spring } from 'react-spring';

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '2vw'
}

class Component1 extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 1, marginTop: 0 }}
            >
                {props => (
                    <div style={props}>
                        <div style={c1Style}>
                            <h1>Component1</h1>
                            <p>'Unclean, unclean!' Mina Harker screams, gathering her bloodied nightgown around her.  In Chapter 21 of Bram Stoker's Dracula, Mina's friend John Seward, a psychiatrist in Purfleet, Essex, tells how he and a colleague, warned that Mina might be in danger, broke into her bedroom one night and found her kneeling on the edge of her bed. Bending over her was a tall figure, dressed in black.</p>
                        </div>
                    </div>
                )}
            </Spring>
        );
    };
};

export default Component1;