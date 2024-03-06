import React from 'react'

export default function Categories() {
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
          <tr>
            <td className="border border-gray-500 px-4 py-2">Dato 1</td>
            <td className="border border-gray-500 px-4 py-2">Dato 2</td>
            <td className="border border-gray-500 px-4 py-2">Dato 3</td>
            <td className="border border-gray-500 px-4 py-2">Dato 4</td>
          </tr>
          {/* Agrega más filas según sea necesario */}
        </tbody>
      </table>
    </div>
  )
}
