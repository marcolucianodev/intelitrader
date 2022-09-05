using CadastroDeUsuario.Models;

namespace CadastroDeUsuario.Services;

public static class UserService
{
    static List<User> Users { get; }
    static int nextId = 3;
    static UserService()
    {
        Users = new List<User>
        {
            // new User { Id = 1, Name = "Classic Italian", IsGlutenFree = false },
            // new User { Id = 2, Name = "Veggie", IsGlutenFree = true }
            new User { Name = "Cliente 1", Surname = "Sobrenome 1", Age = 25, CreationDate = DateTime.Now, Id = 1},
            new User { Name = "Cliente 2", Surname = "Sobrenome 2", Age = 25, CreationDate = DateTime.Now, Id = 2},
            new User { Name = "Cliente 3", Surname = "Sobrenome 3", Age = 25, CreationDate = DateTime.Now, Id = 3},
        };
    }

    public static List<User> GetAll() => Users;

    public static User? Get(int id) => Users.FirstOrDefault(p => p.Id == id);

    public static void Add(User user)
    {
        user.Id = nextId++;
        Users.Add(user);
    }

    public static void Delete(int id)
    {
        var user = Get(id);
        if(user is null)
            return;

        Users.Remove(user);
    }

    public static void Update(User user)
    {
        var index = Users.FindIndex(p => p.Id == user.Id);
        if(index == -1)
            return;

        Users[index] = user;
    }
}