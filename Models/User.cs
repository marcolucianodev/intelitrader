namespace CadastroDeUsuario.Models;

public class User
{
    public string? Name { get; set; }
    public string? Surname { get; set; }
    public int Age { get; set; }
    public DateTime CreationDate { get; set; }
    public int Id { get; set; }
}