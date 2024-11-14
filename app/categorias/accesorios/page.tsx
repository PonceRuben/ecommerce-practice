import Link from "next/link";

export function Accesorios() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Link href="/categorias">Volver a las categorias</Link>
        <h1 className="text-3xl font-bold text-center mb-8">
          Viendo accesorios
        </h1>
      </div>
    </div>
  );
}

export default Accesorios;
