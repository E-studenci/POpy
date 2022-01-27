const AddPointToRoute = () => {
    return ( 
        <div class="flex justify-center items-center">
            <div class="w-1/2 border border-black rounded-2xl flex flex-col">
                <div class="w-full mt-5">
                    <input class="border border-black rounded-2xl py-1 px-4" type="text" />
                </div>

                <div class="flex flex-row mt-2">
                    <div class="w-1/4 grid justify-start">
                        <p class="ml-5">Nazwa</p>
                    </div>
                    <div class="w-1/4 grid justify-start">
                        <p>Pasmo górskie</p>
                    </div>
                    <div class="w-1/4 grid justify-start">
                        <p>Wysokość n.p.m.</p>
                    </div>
                    <div class="w-1/4 grid justify-start">
                        <p>Dystans</p>
                    </div>
                </div>

                <a href="#sasa">
                <div class="mt-1 w-full border border-black rounded-2xl flex flex-row h-11">
                <div class="w-1/4 grid justify-start content-center">
                        <p class="ml-5">Nazwa</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Pasmo górskie</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Wysokość n.p.m.</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Dystans</p>
                    </div>
                </div>
                </a>

                <a href="#sasa">
                <div class="mt-1 w-full border border-black rounded-2xl flex flex-row h-11">
                <div href="#ss" class="w-1/4 grid justify-start content-center">
                        <p class="ml-5">Nazwa</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Pasmo górskie</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Wysokość n.p.m.</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Dystans</p>
                    </div>
                </div>
                </a>

                <div class="w-full border border-black rounded-2xl h-20 mt-5 items-center justify-center flex">
                    <button class="bg-red-600 rounded-full px-20 py-2"><p class="text-white">Anuluj</p></button>
                </div>

            </div>
        </div>
     );
}
 
export default AddPointToRoute;