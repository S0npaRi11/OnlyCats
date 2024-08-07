using OnlyCats.Entities;

namespace OnlyCats.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
