import Link from "next/link";

export function NavBar() {
  return (
    <>
      <nav className="bg-[#d18e8f] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">
            <a href="#">SportsStore</a>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 5h12.8l-1.2-5M10 21h4m-6 0h-.01M7 13l1.2-5h5.6L17 13"
                />
              </svg>
              <span className="ml-1">Carrito</span>
            </a>
          </div>
        </div>

        <div className="bg-[#8fc9b9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-4 py-3">
              <Link
                href="/categorias/ropa"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                Ropa
              </Link>
              <Link
                href="/categorias/calzado"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                Calzado
              </Link>
              <Link
                href="/categorias/accesorios"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                Accesorios
              </Link>
              <Link
                href="/categorias/equipamiento"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                Equipamiento
              </Link>
              <Link
                href="/categorias/ofertas"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                Ofertas
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
