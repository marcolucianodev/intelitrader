using Cadastro.Models;

namespace Cadastro.Services;

public static class CadastroService
{
    static List<UserCadastro> Cadastros { get; }
    static int nextId = 4;
    static CadastroService()
    {
        Cadastros = new List<UserCadastro>
        {
            new UserCadastro { Id = 1, FirstName = "Cliente 1", Surname = "Sobrenome 1", Age = 25,  CreationDate = DateTime.Now },
            new UserCadastro { Id = 2, FirstName = "Cliente 2", Surname = "Sobrenome 2", Age = 25,  CreationDate = DateTime.Now },
            new UserCadastro { Id = 3, FirstName = "Cliente 3", Surname = "Sobrenome 3", Age = 25,  CreationDate = DateTime.Now }
        };
    }

    public static List<UserCadastro> GetAll() => Cadastros;

    public static UserCadastro? Get(int id) => Cadastros.FirstOrDefault(p => p.Id == id);

    public static void Add(UserCadastro cadastro)
    {
        cadastro.Id = nextId++;
        Cadastros.Add(cadastro);
    }

    public static void Delete(int id)
    {
        var cadastro = Get(id);
        if(cadastro is null)
            return;

        Cadastros.Remove(cadastro);
    }

    public static void Update(UserCadastro cadastro)
    {
        var index = Cadastros.FindIndex(p => p.Id == cadastro.Id);
        if(index == -1)
            return;

        Cadastros[index] = cadastro;
    }
}