
 function CustomList(prop){
    let {list}=prop
    return(
        <ol>{list.map((each,index)=>(
            <li key={index}>{each}</li>
        ))
            }

        </ol>
    )
}
export default CustomList