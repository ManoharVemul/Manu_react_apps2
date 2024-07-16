import { Component } from "react";

class ButtonClass extends Component {
    render(props) {
    const {list}=props
        return (
            <>
            <button>{list}</button>
            </>
        )
    }
}
export default ButtonClass