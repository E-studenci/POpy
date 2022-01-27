const AddPathPage = () => {
    return ( 
        <div>
            <div class="mt-10 flex flex-row">
                <div class="w-1/2 justify-center">
                    <button class="bg-green-700 rounded-full px-20 py-2"><p class="text-white">Początek odcinka</p></button>
                </div>
                <div class="w-1/2 justify-center">
                    <button class="bg-red-700 rounded-full px-20 py-2"><p class="text-white">Koniec odcinka</p></button>
                </div>
            </div>
            <div class="flex flex-row mt-5">
                <div className="w-3/12" />
                <div class="w-1/2 border-black rounded-xl border-2">
                    <div class="flex flex-col mt-3">

                        <div class="flex flex-row mt-3">
                            <div class="w-1/6">
                                <p>Kolor:</p>
                            </div>
                            <div>
                                <input class="justify-start ml-10 rounded-full px-20 border border-black" type="text" />
                            </div>
                        </div>

                        <div class="flex flex-row mt-3">
                            <div class="w-1/6">
                                <p>Długość:</p>
                            </div>
                            <div>
                                <input class="justify-start ml-10 rounded-full px-20 border border-black" type="text" />
                            </div>
                        </div>

                        <div class="flex flex-row mt-3">
                            <div class="w-1/6">
                                <p>Kierunek:</p>
                            </div>
                            <div>
                                <input class="justify-start ml-10 rounded-full px-20 border border-black" type="text" />
                            </div>
                        </div>

                        <div class="flex flex-row mt-3">
                            <div class="w-1/6">
                                <p>Oficjalny:</p>
                            </div>
                            <div>
                                <input class="justify-start ml-10 rounded-full px-20 border border-black" type="text" />
                            </div>
                        </div>

                        <div class="flex flex-row mt-3">
                            <div class="w-1/6">
                                <p>Punkty:</p>
                            </div>
                            <div>
                                <input class="justify-start ml-10 rounded-full px-20 border border-black" type="text" />
                            </div>
                        </div>

                        <div class="flex flex-row mt-3 mb-5">
                            <div class="w-1/6">
                                <p>Status:</p>
                            </div>
                            <div>
                                <input class="justify-start ml-10 rounded-full px-20 border border-black" type="text" />
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div class=" w-2/3">
                            </div>
                            <div class="w-1/3 flex flex-col">
                                <button class="bg-green-600 mt-2 rounded-full mb-1 px-10 py-2 mr-3"><p class="text-white">Zapisz</p></button>
                                <button class="bg-red-600 mt-2 rounded-full mb-1 px-10 py-2 mr-3"><p class="text-white">Zrezygnuj</p></button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AddPathPage;