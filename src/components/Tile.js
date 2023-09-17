import SpainPhoto from '../images/Spain.jpg'



function Tile(props) {
    return (
        <>
            <div class="block rounded-md bg-black flex-col mx-auto my-8 w-3/4 sm:w-1/4 ">
                <img class="rounded-t-lg w-full" src={props.img} alt="" />
                <div class="p-6 flex-col justify-center">
                    <h5 class="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50">
                        {props.title}
                    </h5>
                    <hr className='my-2'></hr>
                    <p class="mb-4 text-base text-white dark:text-neutral-200 font-bold">
                        {props.description}
                    </p>
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                        View Data
                    </button>
                </div>
            </div >
        </>
    )
}



export default Tile