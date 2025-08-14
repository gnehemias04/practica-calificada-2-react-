import { useState } from "react";

function Sync() {
  const [categories, setCategories] = useState("animales");
  return [categories, setCategories];
}

function Category() {
  const [categories, setCategories] = Sync();
  return (
    <>
      <div className="w-full bg-blue-400 flex justify-around py-1">
        <button
          type=""
          className="border-1 border-black rounded-lg bg-blue-900 px-2 text-white"
        >
          Aleatorio
        </button>
        <select
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          className="border-1 border-black rounded-lg bg-blue-900 px-2 text-white"
        >
          <option value="animales">Categorias</option>
          <option value="perros">Perros</option>
          <option value="gatos">Gatos</option>
          <option value="planetas">Planetas</option>
          <option value="paisajes">Paisajes</option>
          <option value="futbol">Futbol</option>
          <option value="comida">Comida</option>
          <option value="animales">Animales</option>
          <option value="mar">Mar</option>
          <option value="argentina">Argentina</option>
          <option value="mormon">Mormon</option>
        </select>
      </div>
    </>
  );
}

export { Category, Sync };
