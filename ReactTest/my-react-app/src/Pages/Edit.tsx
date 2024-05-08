import ElectronicDeviceDTO from '../Models/ElectronicDeviceDTO';
import ElectroniceDeviceForm from '../App/ElectronicDeviceForm';
import DeviceAPIService from '../Services/Services';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const deviceData = state == null ? null : state.deviceData;

    const save = (data: ElectronicDeviceDTO) => {
        if(deviceData)
        {
            editDevice(data.id, data);
        } else {
            postDevice(data)
        }
        navigate("/");
    }

    const postDevice = async (data: ElectronicDeviceDTO) =>{
        await DeviceAPIService().postDevice(data);
        navigate("/");
    };

    const editDevice = async (id: number, data: ElectronicDeviceDTO) => {
        await DeviceAPIService().putDevice(data);
    }

return (
    <>
    <h1>Electronic World</h1>
    <ElectroniceDeviceForm deviceData={deviceData} postDeviceFunc={save}  />
    </>
);

}

export default Edit;