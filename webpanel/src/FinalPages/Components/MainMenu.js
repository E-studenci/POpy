import {Link} from 'react-router-dom'

const MainMenu = () => {
    return ( 
        <div class="flex justify-center">
            <div class="grid grid-cols-2 grid-row-3 w-3/4 mt-10">
                <Link to="/add_point" class="text-black hover:text-white bg-transparent hover:bg-gray-400 rounded-full m-2 py-3 text-xl border border-black">Dodaj punkt</Link>
                <Link to="/approve_participants" class="text-black hover:text-white bg-transparent hover:bg-gray-400 rounded-full m-2 py-3 text-xl border border-black">Potwierdź uczestników</Link>
                <Link to="/create_trip" class="text-black hover:text-white bg-transparent hover:bg-gray-400 rounded-full m-2 py-3 text-xl border border-black">Stwórz plan wycieczki</Link>
                <Link to="/routes" class="text-black hover:text-white bg-transparent hover:bg-gray-400 rounded-full m-2 py-3 text-xl border border-black">Lista odcinków</Link>
                <Link to="/pending_badges" class="text-black hover:text-white bg-transparent hover:bg-gray-400 rounded-full m-2 py-3 text-xl  border border-black">Weryfikacja podań o odznakę</Link>
                <Link to="/log_in" class="text-black hover:text-white bg-transparent hover:bg-gray-400 rounded-full m-2 py-3 text-xl border border-black">Zaloguj</Link>
            </div>
        </div>
     );
}
 
export default MainMenu;