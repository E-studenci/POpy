import Navbar from './Components/Navbar';
import TitleButton from './Components/TitleButton';

const StartPage = (props) => {
    return ( 
        <div>
        <Navbar button1={props.button1} button2={props.button2}/>
        <TitleButton />
        </div>
     );
}
 
export default StartPage;