namespace Cadastro.Models;

public class UserCadastro
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? Surname { get; set; }
    public int Age { get; set; }
    public DateTime CreationDate { get; set; }
}