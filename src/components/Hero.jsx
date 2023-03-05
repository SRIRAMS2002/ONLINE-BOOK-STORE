import React,{useState} from "react";
import axios from 'axios';
import Cards from './Cards';
const Hero = () => {
  const [search,setSearch]=useState("");
  const [bookData,setData]=useState([]);
  const searchBook=(evt)=>{
      if(evt.key==="Enter")
      {
          axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBXd0a7_PGcdXALqcrarw2faAyWnNXsEPQ'+'&maxResults=40')
          .then(res=>setData(res.data.items))
          .catch(err=>console.log(err))
      }
  }
  return(
    <div className="bg-black" id="Hero1">
    
      <center>
      <p className=' text-yellow-200 pt-[3rem] font-bold md:text-4xl sm:text-3xl text-xl font-Berserker'>
      Hunt about what you want to look .....
        </p>
        <input
          className="text-black font-bold rounded w-[40vw] h-[3rem] mr-5 text-center mt-10 mb-10"
          type="text"
          placeholder="  Search..."
          value={search}
          onChange={e=>setSearch(e.target.value)}
          onKeyPress={searchBook}
        />
        
      </center>

      <div className="container">
        {
          <Cards book={bookData}/>

        }

      
      </div>
      
    </div>
  );
};

export default Hero;
