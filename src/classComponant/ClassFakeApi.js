import axios from "axios";
import { Component } from "react";



class FakeApi extends Component {
    state = {
        items: [],
        loader: true,
        error: false,
    }

    Handler = async () => {
        try {
            const { status, data } = await axios.get("https://fakestoreapi.com/products")
            if (status === 200) {
                this.setState({
                    items: data.products,
                    loader: false
                })

            }


        } catch (error) {
            this.setState({
                error: true,
                loader: false
            })
        }





    }
    render() {
        return (
            <>{
                this.state.loader ? this.state.items.map((each, index) => (
                    <div key={index}>
                        <h1>{each.title}</h1>
                        <button onClick={this.product}>click</button>
                    </div>)) : (<h1>Page is Loading...</h1>)
            }
            </>
        )
    }
}

export default FakeApi
