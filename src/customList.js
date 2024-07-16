
 function CustomList(prop){
    let {list}=prop
    return(
        <ol>{list.map((each)=>(
            <li>{each}</li>
        ))
            }

        </ol>
    )
}
export default CustomList