import { useState } from "react";
export default function Category(props) {
  return (
    <>
      <div className="w-full bg-blue-400 flex justify-center py-1">
        <select
          value={props.categories}
          onChange={(e) => props.setCategories(e.target.value)}
          className="border-1 border-black rounded-lg bg-blue-900 px-2 text-white"
        >
          <option value="animals">Categorias</option>
          <option value="dogs">Perros</option>
          <option value="cat">Gatos</option>
          <option value="planets">Planetas</option>
          <option value="landscapes">Paisajes</option>
          <option value="soccer">Futbol</option>
          <option value="food">Comida</option>
          <option value="animals">Animales</option>
          <option value="sea">Mar</option>
          <option value="argentina">Argentina</option>
        </select>
      </div>
    </>
  );
}
