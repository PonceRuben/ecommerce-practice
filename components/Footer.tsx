export function Footer() {
  return (
    <>
      <footer className="bg-[#8fc9b9] text-white py-4" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-sm">
            &copy; 2024 SportsStore. Todos los derechos reservados.
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-white">
              Política de Privacidad
            </a>
            <a href="#" className="text-white hover:text-white">
              Términos de Servicio
            </a>
            <a href="#" className="text-white hover:text-white">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
