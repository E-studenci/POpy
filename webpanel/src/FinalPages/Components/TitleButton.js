import { Link } from "react-router-dom";

const TitleButton = () => {
    return ( 
        <div>
        <Link to="/menu">
            <p class="text-99xl text-gray-600 font-serif hover:underline font-semibold">W Góry!</p>
        </Link>
        <div class="object-cover">
        <img class="object-cover" src="Wgory.png" alt="" />
        </div>
        </div>
     );
}
 
export default TitleButton;