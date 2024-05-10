import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import DeviceAPIService from '../Services/Services';
import ElectronicDeviceDTO from '../Models/ElectronicDeviceDTO';
import { useNavigate } from "react-router-dom";
import ElectroniceDeviceForm from '../App/ElectronicDeviceForm';

const Home = () => {
    const navigate = useNavigate();
    const [devices, setDevices] = useState<ElectronicDeviceDTO[]>([]);

    useEffect(() => {
        setTimeout(async () => {
            const devicesResponse = await DeviceAPIService().getDevices()
            setDevices(devicesResponse);
        }, 100);
      }, []);

    const postDevice = async (data: ElectronicDeviceDTO) =>{
        await DeviceAPIService().postDevice(data);
        const devicesResponse = await DeviceAPIService().getDevices()
        setDevices(devicesResponse);
    };

    const editDevice = (data: ElectronicDeviceDTO) => {
        console.log(data);
        navigate("/edit", {state:{deviceData: data}});
        // await DeviceAPIService().putDevice(updateDevice);
        // const devicesResponse = await DeviceAPIService().getDevices()
        // setDevices(devicesResponse);
    }

    function navigateCreate() {
        navigate("/edit");
    }

    const editButton = (data: ElectronicDeviceDTO) => {
        return (
            <Button label='Edit' onClick={() => (editDevice(data))}/>
            );
    }

        // Todo add a row with the adjusted price after BE update
    return (
        <>
        <h1>Electronic World</h1>
        <DataTable value={devices} showGridlines tableStyle={{ minWidth: '50rem' }}>
            <Column field="name" header="Name"></Column>
            <Column field="description" header="Description"></Column>
            <Column field="price" header="Price"></Column>
            <Column field="stockQuantity" header="Stock Quantity"></Column>
            <Column field='modifiedPrice' header="Modified Price" />
            <Column body={editButton} header="Edit Device"></Column>
        </DataTable>
        <Button label='Add Device' onClick={navigateCreate} ></Button>
        {/* <ElectroniceDeviceForm postDeviceFunc={postDevice}  /> */}
        </>
    );
}


export default Home;