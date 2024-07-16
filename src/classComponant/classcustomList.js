import { Component } from "react";

class CustomClassList extends Component() {
    render(props) {
        const { list } = props
        return (
            <>
                {list.map((each) => {
                    return (
                        <ol>{each}</ol>
                    )
                })
                }

            </>
        )
    }
}


export default CustomClassList






