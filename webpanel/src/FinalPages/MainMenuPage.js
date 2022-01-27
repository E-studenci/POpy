import MainMenu from "./Components/MainMenu";
import Navbar from "./Components/Navbar";

const MainMenuPage = () => {
    return ( 
        <div>
        <Navbar button1="Zaloguj się" button2="Zarejestruj"/>
        <MainMenu />
        </div>
     );
}
 
export default MainMenuPage;