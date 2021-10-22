import React, {useEffect, useState} from 'react';
import DataItems from './DataItems';
import {fetchData} from '../services/data';

function Navigation(props) {
    const [data, setData] = useState([]);

    useEffect(() =>{
        async function getData(){
             const result = await fetchData();
             setData(result);
         }
         
         getData();
     })
    return (
        <div>
            <DataItems data={data}></DataItems>
        </div>
    );
}

export default Navigation;