import Link from "next/link";

export function Categorias() {
  const categories = [
    {
      name: "Ropa",
      image: "https://via.placeholder.com/200", // Cambia esta URL por la de tu imagen
      path: "/categorias/ropa",
    },
    {
      name: "Calzado",
      image: "https://via.placeholder.com/200", // Cambia esta URL por la de tu imagen
      path: "/categorias/calzado",
    },
    {
      name: "Accesorios",
      image: "https://via.placeholder.com/200", // Cambia esta URL por la de tu imagen
      path: "/categorias/accesorios",
    },
    {
      name: "Equipamiento",
      image: "https://via.placeholder.com/200", // Cambia esta URL por la de tu imagen
      path: "/categorias/equipamiento",
    },
  ];

  return (
    <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#d8d9c0]">
      <h1 className="text-3xl font-bold text-center mb-8">Categorías</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 h-96">
        {categories.map((category, index) => (
          <Link href={category.path} key={index} className="group">
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center bg-[#d18e8f]">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                  {category.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
