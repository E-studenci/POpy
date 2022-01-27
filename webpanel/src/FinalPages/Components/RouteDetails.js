const RouteDetails = (props) => {
    return(
        <div class="w-1/2 absolute left-1/4 bg-white mt-5 border-2 border-black h-5/6">
            <p>Zalewski Andrzej</p>
            <div class="flex flex-row border-white border-b-2 border-b-slate-300 ml-5 mr-5">
                <div class="w-1/2">
                    <p>Trasa</p>
                </div>
                <div class="w-1/4">
                    <p>Punkty</p>
                </div>
                <div class="w-1/4">
                    <p>Obecność</p>
                </div>
            </div>
            
            <div class="flex flex-row  ml-5 mr-5">
                <div class="w-1/2">Coś tam</div>
            
            <div class="w-1/4">
                3
            </div>
            <div class="w-1/4">
            <input class="h-8 w-8 " type="checkbox" name="group1[]" />
            </div>
            </div>

            <div class="flex flex-row  ml-5 mr-5">
                <div class="w-1/2">Coś tam</div>
            
            <div class="w-1/4">
                3
            </div>
            <div class="w-1/4">
            <input class="h-8 w-8 " type="checkbox" name="group1[]" />
            </div>
            </div>

            <div class="flex flex-row  ml-5 mr-5">
                <div class="w-1/2">Coś tam</div>
            
            <div class="w-1/4">
                3
            </div>
            <div class="w-1/4">
            <input class="h-8 w-8 " type="checkbox" name="group1[]" />
            </div>
            </div>

            <div class="flex flex-row">
                <div class="w-1/2">

                </div>
                <div class="w-1/2 border-white border-t-2 border-t-black mr-5">
                    <p>Suma punktów XD</p>
                </div>
            </div>

            <div class="flex flex-row mt-10">
                <div class="w-1/2">
                    <button class="bg-red-500 px-8 py-3 rounded-full text-white">Anuluj</button>
                </div>
                <div class="w-1/2">
                    <button class="bg-green-500 px-8 py-3 rounded-full text-white">Potwierdź</button>
                </div>
            </div>



        </div>
        
    );
}

export default RouteDetails;