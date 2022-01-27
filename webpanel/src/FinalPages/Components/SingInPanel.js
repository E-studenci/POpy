const SingInPanel = () => {
    return ( 
        <div>
            <div class="w-full flex items-center justify-center flex-col">
                <div class="w-1/2 border border-black flex rounded-2xl bg-slate-200 flex-row">
                    <div class="w-1/2 flex flex-col ml-5">
                        <p class="mt-5 w-full flex justify-start">Login</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="text" />
                        <p class="mt-5 w-full flex justify-start">Imię</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="text" />
                        <p class="mt-5 w-full flex justify-start">Nazwisko</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="text" />
                    </div >
                        
                    <div class="w-1/2 flex flex-col ml-5 mr-5">
                        <p class="mt-5 w-full flex justify-start">E-mail</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="text" />
                        <p class="mt-5 w-full flex justify-start">Hasło</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="password" />
                        <p class="mt-5 w-full flex justify-start">Powtórz hasło</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="password" />
                        <button class="bg-green-600 mt-6 rounded-full ml-10 w-5/6 py-3 mb-5"><p class="text-white">Załóż konto</p></button>
                    </div>

                    
                </div>
            
            </div>
        </div>
     );
}
 
export default SingInPanel;