using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TShirt.Models;

namespace TShirt.Data
{
    public class TShirtContext : DbContext
    {
        public TShirtContext (DbContextOptions<TShirtContext> options)
            : base(options)
        {
        }

        public DbSet<TShirt.Models.User> User { get; set; }

        public DbSet<TShirt.Models.Product> Product { get; set; }
    }
}
