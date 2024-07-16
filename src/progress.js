//import ProgressBar from 'react-bootstrap/ProgressBar'

function CustomProgress(prop) {
   const {num,max} =prop
    
    return (<progress  value={prop.num} max={max} style = {{backgroundColor:"red",color:"#66fc03",width:"220px",height:"20px",borderRadius:"15%",}}> {num} </progress>)
}
export default CustomProgress


