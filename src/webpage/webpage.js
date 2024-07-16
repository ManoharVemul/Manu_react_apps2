

const Conditional = (prop) => {
    // let array = ["uhu", "1332", "manu"]
 const {array}= prop
    return (
        <div>
            {
            // if(true){
            //     <h1>{`length of array is ${array.length}`}</h1>
            // }else{
            //     <h1>{"array is empty"}</h1>
            // }

            array ? <h1>{`length of array is ${array.length}`}</h1>:<h1>{"array is empty"}</h1>


            }

        </div>

    )
}

export default Conditional



