namespace WebshopAPI.DTO
{
    public class ElectronicDeviceDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public int StockQuantity { get; set; }
        public int ModifiedPrice { get; set; }

        public ElectronicDeviceDTO(int id, string name, string description, int price, int stockQuantity)
        {
            Id = id;
            Name = name;
            Description = description;
            Price = price;
            StockQuantity = stockQuantity;
        }
    }
}
