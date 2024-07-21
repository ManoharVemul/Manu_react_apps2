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

            incr: (this.state.incr > 0 ? this.state.incr - 1 : 0)
        })
    };
    reset = () => {

        this.setState({
            incr: 0
        })
    };

    render() {
        return (
            <div className="count" >
                <h1>COUNTER        <br/> {this.state.incr}</h1>
                <button onClick={this.increasement}>  Increase </button>
                <button onClick={this.reset}> Reset </button>
                <button onClick={this.decreasement}>  decrease </button>
            </div>
        )
    }
}
export default ButtonClass





