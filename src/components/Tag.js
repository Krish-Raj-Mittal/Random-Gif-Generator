import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Tag () {
    const [tag, setTag] = useState('');
    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState('false');

    async function fetchData() {
        setLoading(true);
         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
         const {data} = await axios.get(url);
         const imageSource = data.data.images.downsized_large.url;
         console.log(imageSource);

         setGif(imageSource);
         setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])

    function clickHandler() {
        fetchData();
    }

    function changeHandler(event) {
        setTag(event.target.value);
    }

    return(
        <div  className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5
         mt-[15px] mb-[50px]">
            <h1 className="text-2xl underline uppercase font-bold  mt-5"> Random {tag} Gif</h1>
            
            {
                loading ? (<Spinner/>) : (  <img src={gif}  width='450' alt='gif'/>) 
            }
            
          <input type="text" className="w-10/12 bg-slate-200 text-lg py-1 rounded-lg mb-1 text-center" onChange={changeHandler} value={tag} />

            <button  onClick={clickHandler} className="w-10/12 bg-slate-200 text-lg py-1 rounded-lg mb-5">
                Generate
            </button>
        </div>
    );
}

export default Tag;