/* eslint-disable prettier/prettier */
import {useState, useEffect} from 'react'

const useFetch = (url) => {
   // Task 1: complete this custom hook
   // step1: create 3 states: data, isLoading, error
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   const [users, setUsers] = useState([]);
 
   // step2: fetch data & handle error
   useEffect(() => {
    fetch(url)
    .then((res)=>{
       if(!res.ok){
         throw Error("user fetch unsuccessful");
       }else{
         return res.json();
       }
    })
    .then((data)=>{
       setIsLoading(false);
       setUsers(data);
       setError(null);
    })
    .catch((error)=>{
       setIsLoading(false);
       setError(error.message);
    })
   }, [])
   
   // step3: return 3 states
   return { users, error, isLoading }
 };

export default useFetch