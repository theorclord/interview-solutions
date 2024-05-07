import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios';

const Edit = () => {

    const endpoint = "http://localhost:15842/api/ElectronicDevice"
    const [device, setDevice] = useState([]);
    const fetchData = () => {
        return axios.get(endpoint)
              .then((response) => setDevice(response.data));
      }
    
      useEffect(() => {
        fetchData();
      },[])

return (
    <>
    <h1>Electronic World</h1>
    <DataTable value={device} showGridlines tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="stockQuantity" header="Stock Quantity"></Column>
    </DataTable>
    <Button label='Save'/>
    </>
);

}

export default Edit;