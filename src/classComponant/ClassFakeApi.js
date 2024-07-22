import axios from "axios";
import { Component } from "react";
import ImageComponent from "../ImageComponent";
import CustomProgress from "../progress";



class FakeApi extends Component {
        state = {
            items: [],
            loader: true,
            error: false,
        }

        Handler = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products")
                console.log(res.data)
                this.setState({
                    items: res.data,
                    loader: true
                })

            } catch (error) {
                this.setState({
                    error: true,
                    // loader: false
                })
            }


        }
        yu = {
            backgroundColor: "#f7f5f7", width: "350px", textAlign: "center", color: "#FF8F00", borderRadius: "15px", marginTop: "100px"
        }
        tu = {
            borderRadius: "5px", backgroundColor: "#FFDB00", color: "#AF47D2", width: "80px", height: "25px"
        }
        render() {
            return (
                <>
                    <button onClick={this.Handler}>click</button>
                    {
                        this.state.loader ? (this.state.items.map((each, index) => (
                            <div key={index} style={this.yu}>

                                <h5>{each.title}</h5>
                                <ImageComponent path={each.image} />
                                <CustomProgress num={each.price / 3} max={100} />

                                <h3>price : ₹ {each.price * 30}</h3>

                                <button style={this.tu} >Add to cart</button><br />
                            </div>))) : (<h1>Page is Loading...</h1>)


                    }
                </>
            )
        }
    }

export default FakeApi
