import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../Screens/home-screen"
import AboutScreen from "../Screens/about-screen"
import BlogScreen from "../Screens/blog-screen"
import SettingScreen from "../Screens/setting-screen"
import InvalidScreen from "../Screens/invalid-screen"

const NavigationStack = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<HomeScreen />} />
                <Route path="about" element={<AboutScreen />} />
                <Route path="blog" element={<BlogScreen />} />
                <Route path="setting" element={<SettingScreen />} />
                <Route path="*" element={<InvalidScreen />} />

            </Routes>
        </BrowserRouter>
    )
}

export default NavigationStack