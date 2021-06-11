using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TShirt.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Picture { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public Guid User { get; set; }
        public bool Status { get; set; }
    }
}
