//import ProgressBar from 'react-bootstrap/ProgressBar'
import React from 'react';
function CustomProgress(prop) {
   const {num,max} =prop
    
    return (<progress  value={prop.num} max={max} style = {{backgroundColor:"red",color:"#66fc03",width:"220px",height:"20px",borderRadius:"15%",}}> {num} </progress>)
}
export default CustomProgress;

export const ProgressBar = ({ bgcolor, completed }) => {
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};



