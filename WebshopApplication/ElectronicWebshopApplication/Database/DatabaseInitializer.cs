using Database.Entities;

namespace Database
{
    public class DatabaseInitializer
    {
        public static void Initialize(MainDbContext context)
        {
            context.Database.EnsureCreated();

            // Check if data already exists
            if (context.ElectronicDevices.Any())
            {
                return;
            }

            // Add Enitities
            context.ElectronicDevices.Add(new ElectronicDevice(
                "Laptop",
                "High-performance laptop",
                1000,
                10)
            );
            context.ElectronicDevices.Add(new ElectronicDevice(
                "Smartphone",
                "Latest model smartphone",
                800,
                15)
            );
            context.ElectronicDevices.Add(new ElectronicDevice(
                "Headphones", 
                "Noise-cancelling headphones",
                200,
                20)
            );


            context.SaveChanges();
        }
    }
}
