using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDTO
    {
        [Required(ErrorMessage="user name is required")]        
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}