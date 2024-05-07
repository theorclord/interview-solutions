import axios from 'axios';
import ElectronicDeviceDTO from '../Models/ElectronicDeviceDTO';

const endpoint = "http://localhost:15842/api/ElectronicDevice"

// export const getDevices = () => axios.get(endpoint);

const DeviceAPIService = () => {
    const getDevices = async (): Promise<ElectronicDeviceDTO[]> => {
      const response = await axios.get(endpoint);
      if (!response.data) {
        Promise.reject();
      }
  
      return response.data;
    };

    return {
      getDevices,
    };
  };
  
  //   const authenticateWithOneTimePassword = async (
  //     dto: OneTimePasswordLoginDTO,
  //   ): Promise<User> => {
  //     const response = await simpleSpApi().post<User>(routes.otp(), dto);
  //     if (!response.data) {
  //       return Promise.reject();
  //     }
  //     return response.data;
  //   };
  
  //   return {
  //     authenticate,
  //     authenticateWithOneTimePassword,
  //   };
  // };

  export default DeviceAPIService;