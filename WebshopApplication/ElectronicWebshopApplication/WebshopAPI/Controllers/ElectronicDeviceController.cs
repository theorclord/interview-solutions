using Database.Entities;
using Microsoft.AspNetCore.Mvc;
using WebshopAPI.DTO;
using WebshopAPI.Repositories;

namespace WebshopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElectronicDeviceController : ControllerBase
    {
        private readonly ILogger<ElectronicDeviceController> _logger;
        private readonly ElectronicDeviceRepository _repository;

        public ElectronicDeviceController(ILogger<ElectronicDeviceController> logger,
            ElectronicDeviceRepository electronicDeviceRepository)
        {
            _logger = logger;
            _repository = electronicDeviceRepository;
        }

        [HttpGet]
        public List<ElectronicDeviceDTO> Get()
        {
            return _repository.Get().Select(CreateDTO).ToList();
        }

        [HttpGet("{id}")]
        public ElectronicDeviceDTO Get(int id)
        {
            // Handle no device in repository
            return CreateDTO(_repository.Get(id));
        }

        [HttpPost]
        public void Post([FromBody] ElectronicDevice newDevice)
        {
            _repository.Create(newDevice);
        }

        [HttpPut]
        public void Put([FromBody] ElectronicDevice device)
        {
            // TODO Handle no device in repository
            _repository.Update(device);
        }

        private ElectronicDeviceDTO CreateDTO(ElectronicDevice device)
        {
            // Linear algorithm going from 100% to max value going from the threshold to 1
            var modifiedPrice = device.Price;

            var threshold = 10;
            var maxValueIncreasePercentage = 50;
            var maxValueIncrease = (maxValueIncreasePercentage * device.Price) / 100;
            
            if (device.StockQuantity <= threshold && device.StockQuantity > 0)
            {
                var addedPrice = -maxValueIncrease / threshold * (device.StockQuantity - 1) + maxValueIncrease;
                modifiedPrice += addedPrice;
            }

            return new ElectronicDeviceDTO(device.Id, device.Name, device.Description, device.Price, device.StockQuantity) { ModifiedPrice = modifiedPrice};
        }
    }
}
