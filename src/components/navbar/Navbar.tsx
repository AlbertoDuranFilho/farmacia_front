import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
            			   bg-purple-900 text-white"
      >
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold">
            PharmaClick
          </Link>
          <div className="flex gap-4">
            Produtos
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>{" "}
            <Link to="/cadastrarcategoria" className="hover:underline">
              Cadastrar categorias
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
