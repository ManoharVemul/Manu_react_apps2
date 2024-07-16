import Heading from "./heading"
import ImageComponent from "./ImageComponent"
import CustomList from "./customList"
import './food.css'
import data from "./Data/data"


function Ingrient(){
   
return(
<>
{ data.map((eachIn,index)=>(
<div  className="food"> 

    
<Heading  headingMatter={eachIn.name} />
<ImageComponent path={eachIn.image} />
<Heading  headingMatter="ingredients" />
<CustomList list={eachIn.ingredients}/>
<Heading  headingMatter="instructions" />
<CustomList list={eachIn.instructions}/>
</div>
))}

</>
)

}

export default Ingrient

