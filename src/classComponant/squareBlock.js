import { Component } from "react";
import './class.css'
class SquareBlock extends Component {
    state = {
        arr: [],
        num: 200,
        bul:true
    };
    clrEvent = (targetBlock)=>{
        const newBlock = this.state.sqrEvent(this.state.arr,targetBlock);
        this.setState({
           arr:newBlock
        })};

    handeler = (newBlock,targetBlock)=>{
        const updatedArr = this.state.arr
        this.setState({
            arr:updatedArr
        })

    }


    sqrEvent = (arr,targetBlock) => {
        console.log("hii")
        this.setState({
            arr: [...this.state.arr, 1],
            num: this.state.num + 2,
            bul:!this.state.bul
        })

    };
  
    

    render() {

        return (
            <>
                <h1 style={{ textAlign: "center" }}>No of Squares 
                    {"   "+this.state.arr.length}
                </h1>
                <button onClick={this.sqrEvent} >add Square</button>
                <div className="grid" >
                    {this.state.arr.map((each, index) => <div onClick={this.clrEvent(index)} className={((index+1) % 2 === 0 ? "evenSqr" : "oddSqr")}  id={this.state.bul ? "sigClk":"dblclk"} style={{ width: this.state.num, height: this.state.num }} ><h1> I am {index + 1} <br /> BLOCK</h1></div>)
                    }
                </div>
            </> 
        )
    }
}
export default SquareBlock

