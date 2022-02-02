import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return ( 
        <ul class="flex bg-gray-500 p-5">
            <div class="flex w-full">
            <li>
                <p class="text-white hover:text-gray-400 text-xl">O nas</p>
            </li>
            <li class="ml-6">
                <p class="text-white hover:text-gray-400 text-xl">Regulamin</p>
            </li>
            <li class="ml-6">
                <Link to="/menu"><p class="text-white hover:text-gray-400 text-xl">Strona Główna</p></Link>
            </li>
            <div class="absolute right-0 mr-10 -mt-2">
                <button class="mr-5 bg-transparent text-white text-xl hover:bg-white hover:text-black rounded-full py-2 px-4 border border-white">
                    <Link to="/log_in"><p>Zaloguj</p></Link>
                    </button>
                <Link to="/sign_in"><button class="bg-transparent text-white text-xl hover:bg-white hover:text-black rounded-full py-2 px-4 border border-white">
                    Utwórz konto
                    </button></Link>
            </div>
            </div>
        </ul>
     );
}
 
export default Navbar;