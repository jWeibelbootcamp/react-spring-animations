import React from "react";
import { useSpring, animated } from '@react-spring/web';


const Component1 = () => {
    const springs = useSpring({
        from: { opacity: 0, marginTop: -500 },
        to: { opacity: 1, marginTop: 0 },
    });
    
    const c1Style = {
        background: 'steelblue',
        color: 'white',
        padding: '2vw',
        ...springs
    };

    return (
        <animated.div
            style={c1Style}
            // <h1>Component1</h1>
            // <p>'Unclean, unclean!' Mina Harker screams, gathering her bloodied nightgown around her.  In Chapter 21 of Bram Stoker's Dracula, Mina's friend John Seward, a psychiatrist in Purfleet, Essex, tells how he and a colleague, warned that Mina might be in danger, broke into her bedroom one night and found her kneeling on the edge of her bed. Bending over her was a tall figure, dressed in black.</p>
    );
};

export default Component1;