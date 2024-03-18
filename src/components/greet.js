import React from "react"

// function Greet() {
//     return <h1>Hey React!</h1>
// }

const Greet = (props) => {
    return <h1>Hello {props.name} {props.heroName}</h1>
}
export default Greet