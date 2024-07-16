
function Card() {
    return (
        <div style={{ border: "3px green", backgroundColor: "#f7f5f7", width: "300px", borderRadius:"15px",  textAlign:"center"}}>

            <img src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} alt={"manu"} width={"200px"} height={"300px"} />
            <h1>Bag</h1>
            <h2>Price ₹300</h2>
            <button style={{ height: "20px" }}>Add to cart</button>
        </div>
    )
}

export default Card
