export type CategoriaType = {
    name: string;
    image: string;
    path: string;
  };
  
  export const categorias: CategoriaType[] = [
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