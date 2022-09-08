using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CadastroApi.Models;
using Microsoft.EntityFrameworkCore;
using CadastroApi.Data;

namespace CadastroApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CadastroController : ControllerBase
    {
        /*
         * public static List<Cadastro> cadastros = new List<Cadastro>
        {
            new Cadastro {
                Id = 1,
                FirstName = "Cliente 1",
                Surname = "Sobrenome 1",
                Age = 25,
                CreationDate = DateTime.Now,
            },
            new Cadastro {
                Id = 2,
                FirstName = "Cliente 2",
                Surname = "Sobrenome 2",
                Age = 25,
                CreationDate = DateTime.Now,
            },
            new Cadastro {
                Id = 3,
                FirstName = "Cliente 3",
                Surname = "Sobrenome 3",
                Age = 25,
                CreationDate = DateTime.Now,
            }

        };
        */

        public readonly DataContext _context;

        public CadastroController(DataContext context)
        {
            _context = context;
        }

        //Buscar dados GET
        [HttpGet]
        public async Task<ActionResult<List<Cadastro>>> Get()
        {
            return Ok(await _context.Cadastros.ToListAsync());
        }

        //Buscar dados por id (GET POR ID)
        [HttpGet("{id}")]
        public async Task<ActionResult<Cadastro>> Get(int id)
        {
            var cadastro = await _context.Cadastros.FindAsync(id);
            if (cadastro == null)
                return BadRequest("DADOS NÃO ENCONTRADOS");
            return Ok(cadastro);
        }

        //Adicionar dados (POST)
        [HttpPost]
        public async Task<ActionResult<List<Cadastro>>> AddCadastro(Cadastro cadastro)
        {
            _context.Cadastros.Add(cadastro);
            await _context.SaveChangesAsync();
            return Ok(await _context.Cadastros.ToListAsync());
        }

        //Editar dados (UPDATE)
        [HttpPut]
        public async Task<ActionResult<List<Cadastro>>> UpdateCadastro(Cadastro request)
        {
            var dbcadastro = await _context.Cadastros.FindAsync(request.Id);
            if (dbcadastro == null)
                return BadRequest("DADOS NÃO ENCONTRADOS");
            dbcadastro.FirstName = request.FirstName;
            dbcadastro.Surname = request.Surname;
            dbcadastro.Age = request.Age;

            await _context.SaveChangesAsync();
            return Ok(await _context.Cadastros.ToListAsync());
        }

        //Apagar dados DELETE
        [HttpDelete("{id}")]

        public async Task<ActionResult<Cadastro>> Delete(int id)
        {
            var dbcadastro = await _context.Cadastros.FindAsync(id);
            if (dbcadastro == null)
                return BadRequest("DADOS NÃO ENCONTRADOS");

            _context.Cadastros.Remove(dbcadastro);
            await _context.SaveChangesAsync();
            return Ok(await _context.Cadastros.ToListAsync());
        }
    }
}
