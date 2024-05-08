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
            // Handle no device in repository
            //var existingDevice = _repository.Get(id);
            //device.Id = existingDevice.Id;
            _repository.Update(device);
        }

        private ElectronicDeviceDTO CreateDTO(ElectronicDevice device)
        {
            // TODO handle algorithm
            return new ElectronicDeviceDTO(device.Id, device.Name, device.Description, device.Price, device.StockQuantity);
        }
    }
}
