import { CategoriaType, categorias } from "@/app/db/categoria";

export default async function Categorias({
    params,
  }: {
    params: Promise<{ categoria: string }>
  }) {
    const categoria = (await params).categoria;
    
    const listaCategorias : CategoriaType[] = categorias;

    const categoriaAMostrar: CategoriaType | undefined = listaCategorias.find((cat) => {return cat.name === categoria})
  };

  return (
    <>
    {categoriaAMostrar ? (
      <h1>Categoria {categoriaAMostrar?.name}</h1>) : (
        <h1>La categoria no existe</h1>
      
    )}
    </>
  )