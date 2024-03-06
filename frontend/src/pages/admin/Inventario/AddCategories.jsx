import React, { useState } from "react";

function AddCategories() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product data submitted:", product);
  };

  return (
    <>
      <div className="w-[100%] h-[60%] mx-auto p-6 bg-white rounded shadow ">
        <h2 className="text-xl font-semibold mb-4">Añadir Categoria</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-12">
          <div>
            <label
              htmlFor="productType"
              className="block text-sm font-medium text-gray-700"
            >
              Tipo de Producto *
            </label>
            <input
              type="text"
              id="productType"
              name="productType"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del Producto *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="barcode"
              className="block text-sm font-medium text-gray-700"
            >
              Código de Producto *
            </label>
            <input
              type="text"
              id="barcode"
              name="barcode"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Marca
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Categoria *
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="productUnit"
              className="block text-sm font-medium text-gray-700"
            >
              Unidad de Producto *
            </label>
            <input
              type="text"
              id="productUnit"
              name="productUnit"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="salesUnit"
              className="block text-sm font-medium text-gray-700"
            >
              Unidad de Venta *
            </label>
            <input
              type="text"
              id="salesUnit"
              name="salesUnit"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="purchaseUnit"
              className="block text-sm font-medium text-gray-700"
            >
              Unidad de Compra *
            </label>
            <input
              type="text"
              id="purchaseUnit"
              name="purchaseUnit"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div>
            <label
              htmlFor="cost"
              className="block text-sm font-medium text-gray-700"
            >
              Costo del Producto *
            </label>
            <input
              type="text"
              id="cost"
              name="cost"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <button
            type="submit"
            className="col-span-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[100px] mx-auto"
          >
            Agregar
          </button>
        </form>
      </div>
    </>
  );
}

export default AddCategories;
