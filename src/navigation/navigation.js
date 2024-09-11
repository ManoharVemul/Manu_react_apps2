import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeRecipeScreen from "../recipeScreen/homeRecipeScreen"
// import HomeScreen from "../Screens/home-screen"
// import AboutScreen from "../Screens/about-screen"
// import BlogScreen from "../Screens/blog-screen"
// import SettingScreen from "../Screens/setting-screen"
import InvalidScreen from "../Screens/invalid-screen"
import ViewMore from "../recipeScreen/viewMoreScreen"
import FavouriteRecipe from "../recipeScreen/favouriteScreen"

const NavigationStack = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element = {<HomeRecipeScreen/>}/>
                <Route path="/viewmore" element = {<ViewMore/>}/>
                <Route path="/favourite" element = {<FavouriteRecipe/>}/>
                <Route path="/viewmore/:id" element = {<ViewMore/>}/>
                <Route path="/favourite/:id" element = {<FavouriteRecipe/>}/>
                {/* <Route path="/" element={<HomeScreen />} />
                <Route path="about" element={<AboutScreen />} />
                <Route path="blog" element={<BlogScreen />} />
                <Route path="setting" element={<SettingScreen />} />*/}
                <Route path="*" element={<InvalidScreen />} /> 

            </Routes>
        </BrowserRouter>
    )
}

export default NavigationStack


