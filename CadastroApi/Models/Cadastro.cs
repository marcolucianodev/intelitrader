using System.ComponentModel.DataAnnotations;

namespace CadastroApi.Models
{
    public class Cadastro
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string? FirstName { get; set; }

        public string? Surname { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public DateTime CreationDate { get; set; }
    }
}
