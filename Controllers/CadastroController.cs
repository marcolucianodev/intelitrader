using Cadastro.Models;
using Cadastro.Services;
using Microsoft.AspNetCore.Mvc;

namespace Cadastro.Controllers;

[ApiController]
[Route("[controller]")]
public class CadastroController : ControllerBase
{
    public CadastroController()
    {
    }

    // GET all action
    [HttpGet]
    public ActionResult<List<UserCadastro>> GetAll() =>
    CadastroService.GetAll();

    // GET by Id action
    [HttpGet("{id}")]
    public ActionResult<UserCadastro> Get(int id)
    {
        var cadastro = CadastroService.Get(id);

        if(cadastro == null)
            return NotFound();

        return cadastro;
    }

    // POST action
    [HttpPost]
    public IActionResult Create(UserCadastro cadastro)
    {            
        CadastroService.Add(cadastro);
        return CreatedAtAction(nameof(Create), new { id = cadastro.Id }, cadastro);
    }

    // PUT action
    [HttpPut("{id}")]
    public IActionResult Update(int id, UserCadastro cadastro)
    {
        if (id != cadastro.Id)
            return BadRequest();
            
        var existingCadastro = CadastroService.Get(id);
        if(existingCadastro is null)
            return NotFound();
    
        CadastroService.Update(cadastro);           
    
        return NoContent();
    }

    // DELETE action
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var cadastro = CadastroService.Get(id);
    
        if (cadastro is null)
            return NotFound();
        
        CadastroService.Delete(id);
    
        return NoContent();
    }
}