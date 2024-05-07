using Database.Entities;
using Microsoft.AspNetCore.Mvc;
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
        public List<ElectronicDevice> Get()
        {
            return _repository.Get();
        }

        [HttpGet("{id}")]
        public ElectronicDevice Get(int id)
        {
            // Handle no device in repository
            return _repository.Get(id);
        }

        [HttpPost]
        public void Post([FromBody] ElectronicDevice newDevice)
        {
            _repository.Create(newDevice);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] ElectronicDevice device)
        {
            // Handle no device in repository
            var existingDevice = _repository.Get(id);
            device.Id = existingDevice.Id;
            _repository.Update(device);
        }
    }
}
