class Usuario {
    Login: string;
    Senha: string;

    constructor(login: string, senha: string){
        this.Login = login;
        this.Senha = senha;
    }
}

var usuario: Usuario = new Usuario("Caio", "password");

function validaUsuario(usuario: Usuario): boolean {
  return usuario.Login !== null && usuario.Senha !== null
}

console.log(validaUsuario(usuario));

