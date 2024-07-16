import { Component } from "react";
import './class.css'

class ButtonClass extends Component {
    state = {
        incr: 0
    }
    increasement = () => {
        this.setState({

            incr: this.state.incr + 1

        })

    };
    decreasement = () => {

        this.setState({

            incr: this.state.incr - 1
        })  
    };
    reset = () => {

        this.setState({
            incr: 0
        })
    };

    render() {
         return (
            <div style ={{textAlign:"center"}} >
                <h1 >COUNTER         {"      " + this.state.incr}</h1>
                <button onClick={this.increasement}>  ++  </button>
                <button onClick={this.reset}> Reset </button>
                <button onClick={this.decreasement}>  --  </button>
            </div>
        )
    }
}
export default ButtonClass





