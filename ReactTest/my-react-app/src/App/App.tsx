import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios';
import DeviceAPIService from '../Services/Services';
import ElectronicDeviceDTO from '../Models/ElectronicDeviceDTO';

const App = () => {

    const endpoint = "http://localhost:15842/api/ElectronicDevice"
    const [devices, setDevices] = useState([]);

    // const devicesResponse = await DeviceAPIService().getDevices();
    // if(devicesResponse){
    //     // console.log(devicesResponse);
    // }

    // useEffect(() => {
    //     setTimeout(async () => {
    //         const devicesResponse = await DeviceAPIService().getDevices()
    //         console.log(devicesResponse);
    //         // setDevices(devicesResponse);
          
    //     }, 1000);
    //   }, []);

    const fetchData = () => {
        return axios.get(endpoint)
              .then((response) => setDevices(response.data));
      }

    
      useEffect(() => {
        fetchData();
      },[])

        // Todo add a row with the adjusted price after BE update
return (
    <>
    <h1>Electronic World</h1>
    <DataTable value={devices} showGridlines tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="stockQuantity" header="Stock Quantity"></Column>        
        <Column body={<Button label='Edit'/>}></Column>
    </DataTable>
    <Button label='Add'/>
    </>
);

}

export default App;