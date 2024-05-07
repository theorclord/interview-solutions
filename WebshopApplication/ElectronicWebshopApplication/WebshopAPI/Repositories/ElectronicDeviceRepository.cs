using Database;
using Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace WebshopAPI.Repositories
{
    public class ElectronicDeviceRepository
    {
        private MainDbContext _context;
        
        public ElectronicDeviceRepository(MainDbContext mainDbContext) 
        {
            _context = mainDbContext;
        }

        public List<ElectronicDevice> Get()
        {
            return _context.ElectronicDevices.ToList();
        }

        public ElectronicDevice Get(int id)
        {
            return _context.ElectronicDevices.AsNoTracking().First(e => e.Id == id);
        }

        public void Create(ElectronicDevice device)
        {
            _context.ElectronicDevices.Add(device);
            _context.SaveChanges();
        }

        public void Update(ElectronicDevice device)
        {
            _context.ElectronicDevices.Update(device);
            _context.SaveChanges();
        }
    }
}
