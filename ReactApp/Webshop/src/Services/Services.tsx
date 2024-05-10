import axios from 'axios';
import ElectronicDeviceDTO from '../Models/ElectronicDeviceDTO';

const endpoint = "http://localhost:15842/api/ElectronicDevice"

const DeviceAPIService = () => {
    const getDevices = async (): Promise<ElectronicDeviceDTO[]> => {
      const response = await axios.get(endpoint);
      if (!response.data) {
        Promise.reject();
      }
      return response.data;
    };

    const postDevice = async (dto: ElectronicDeviceDTO): Promise<void> => {
      const response = await axios.post(endpoint,dto);
      // TODO consider if the object should be returned
      return;
    };

    const putDevice = async (dto: ElectronicDeviceDTO): Promise<void> => {
      const response = await axios.put(endpoint,dto);
      // TODO consider if the object should be returned
      return;
    };


    return {
      getDevices,
      postDevice,
      putDevice,
    };
  };

  export default DeviceAPIService;