



function ButtonComponent (prop){
    const {buttonName} =prop
    return(
        <button style={{height:"35px",backgroundColor:"green",color:"red",borderRadius:"8px",fontSize:"30px"}}>{buttonName}</button>

    )
}

export default ButtonComponent