import recetas from "@/utils/recetas.json";
import RecetaCard from "../card/recetaCard";

const Hero = () => {
  const listaRecetas = recetas.recetas;

  return (
    <div className="font-notosans">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary-700 mb-8">
          Recetas sanas para tener un menú saludable durante todo el mes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaRecetas.map((receta, index) => (
            <RecetaCard key={index} receta={receta} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
