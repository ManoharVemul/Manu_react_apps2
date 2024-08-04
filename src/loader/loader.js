
import React from 'react'
import { Audio, DNA } from 'react-loader-spinner'

export default function Loader() {
  return (
    <div style={{padding:"30px",paddingLeft:"400px"}}>
 <h1>The Page is Loading......</h1>  
<Audio
height="240"
width="240"
radius="9"
color="green"
ariaLabel="three-dots-loading"
wrapperStyle
wrapperClass
/>
<DNA
visible={true}
height="240"
width="240"
ariaLabel="dna-loading"
wrapperStyle={{}}
wrapperClass="dna-wrapper"
/>
<h1>Please wait....</h1>   
</div>
  )
}
