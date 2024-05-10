import { useForm, SubmitHandler } from "react-hook-form"
import ElectronicDeviceDTO from "../Models/ElectronicDeviceDTO"

interface Props {
    deviceData: ElectronicDeviceDTO,
    postDeviceFunc: (data: ElectronicDeviceDTO)=> void;
  }

const ElectroniceDeviceForm = ({deviceData, postDeviceFunc} :Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ElectronicDeviceDTO>(
  );

  const onSubmit: SubmitHandler<ElectronicDeviceDTO> = (data) => 
  {
    if(deviceData?.id){
        data.id = deviceData.id;
    }
    postDeviceFunc(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Name</h2>
        <input defaultValue={deviceData?.name} {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <h2>Description</h2>
        <input defaultValue={deviceData?.description} {...register("description", { required: true })} />
        {errors.description && <span>This field is required</span>}
        <h2>Price</h2>
        <input defaultValue={deviceData?.price.toString()} {...register("price", { required: true })} />
        {errors.price && <span>This field is required</span>}
        <h2>StockQuantity</h2>
        <input defaultValue={deviceData?.stockQuantity.toString()} {...register("stockQuantity", { required: true })} />
        {errors.stockQuantity && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}

export default ElectroniceDeviceForm