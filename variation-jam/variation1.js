/* variation 1 - Frod Detective */
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 220
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

function variation1Draw(){
    background(240);
}