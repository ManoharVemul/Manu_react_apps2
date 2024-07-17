import { Component } from "react";
import { IplData } from "../Data/data";
import './class.css'
import { ProgressBar } from "react-bootstrap";
class IplProgress extends Component {
    state = {
        num: 0
    }
    increase = () => {
        this.setState({
            num: this.state.num + 2
        })
    }




    render() {
        return (
            <>
                {IplData.map((each,index) => {
                    return (
                        <div key={index} style={{width:"400px",height:"800px", textAlign:"center",color:"green",margin:"50px",border:"2px black"}} >
                            <h1>{each.team}</h1><br />
                            <img src={each.jerseyimg} alt={"manu"} />
                            <p>tropy  : {each.cups}</p>
                     
                            <progress  value={each.cups / 17 * 100 + this.state.num} max="100"> 32% </progress>
                            <button onClick={this.increase}>Increase</button>
                            <ProgressBar now={60}/>
                        </div>
                    )

                })

                }

            </>
        )
    }
}

export default IplProgress

