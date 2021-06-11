using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TShirt.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
    }
}
