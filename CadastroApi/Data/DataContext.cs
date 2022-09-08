﻿using Microsoft.EntityFrameworkCore;
using CadastroApi.Models;

namespace CadastroApi.Data
{
    public class DataContext :DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Cadastro> Cadastros { get; set; }
    }
}
