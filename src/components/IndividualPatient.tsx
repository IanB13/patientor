import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {
    useParams
  } from "react-router-dom";
import {apiBaseUrl} from '../constants';


const IndividualPatient = () =>{
    const [data,changeData] = useState({loading:true});

    const { id } = useParams<{ id: string }>();
    useEffect(()=>{
        axios.get(`${apiBaseUrl}/patients/${id}`).then(
            response => changeData(response.data)
        );
    },[]);
    if(data.loading){
    return(<div>
       loading...
        </div>);
    }
    else{
        return(<div>
          

        </div>);
    }

};

export default IndividualPatient;