import React from "react";
import { useProductosData } from "./api";

export default function Bills() {
  const productos = useProductosData();
  console.log(productos);
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2">Columna 1</th>
            <th className="border border-gray-500 px-4 py-2">Columna 2</th>
            <th className="border border-gray-500 px-4 py-2">Columna 3</th>
            <th className="border border-gray-500 px-4 py-2">Columna 4</th>
          </tr>
        </thead>

        <tbody>
          {productos && productos.length > 0 ? (
            productos.map((producto) => (
              <tr key={producto.id}>
                <td className="border border-gray-500 px-4 py-2">
                  {producto.nombre}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {producto.cod}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {producto.precio}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {producto.marca}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {producto.cantidad}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
