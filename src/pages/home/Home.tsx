import HomeImage from "../../assets/home_image.png";
import ListaCategorias from "../../components/categoria/listacategorias/ListaCategorias";

function Home() {
  return (
    <>
      <div className="bg-purple-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">PharmaClick</h2>
            <p className="text-xl">A saúde a um clique de você.</p>

            <div className="flex justify-around gap-4"></div>
          </div>

          <div className="flex justify-center ">
            <img src={HomeImage} alt="Imagem Página Home" className="w-2/3" />
          </div>
        </div>
      </div>
      <ListaCategorias />
    </>
  );
}

export default Home;
