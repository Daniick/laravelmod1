import React from "react";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between h-[7vh] md:h-[10vh] border-b  p-8 items-center bg-white">

      
      {/* Agregamos los botones Lista y Artículos */}
      <div className="flex items-center justify-between gap-8 text-white ">
        <button className="text-[#6b6f77] font-semibold transition-colors btn hover:text-gray-400">Lista</button>
        <button className="text-[#6b6f77] font-semibold  transition-colors btn hover:text-gray-400">Artículos</button>
        <button className="text-[#6b6f77] font-semibold transition-colors btn hover:text-gray-400">Elementos</button>
      </div>
      
      
      <nav className="flex items-center gap-2">
        <Menu
          menuButton={
            <MenuButton className="relative p-2 transition-colors rounded-lg hover:bg-secondary-100">
              <RiNotification3Line />
              <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
                2
              </span>
            </MenuButton>
          }
          align="end"
          arrow
          transition
          arrowClassName="bg-secondary-100"
          menuClassName="bg-secondary-100 p-4"
        >
          <h1 className="font-medium text-center text-gray-300">
            Notificaciones (2)
          </h1>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="flex items-center flex-1 gap-4 px-4 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900"
            >
              <img
                src="https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg"
                className="object-cover w-8 h-8 rounded-full"
              />
              <div className="flex flex-col text-sm">
                <div className="flex items-center justify-between gap-4 text-white">
                  <span>Grupo2</span>{" "}
                  <span className="text-[8px]">28/02/2024</span>
                </div>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="flex items-center flex-1 gap-4 px-4 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900"
            >
              <RiThumbUpLine className="box-content p-2 text-blue-700 bg-blue-200 rounded-full" />
              <div className="flex flex-col text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo like</span>{" "}
                  <span className="text-[8px]">28/02/2024</span>
                </div>
                <p className="text-xs text-gray-500">
                  Grupo 2...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="flex items-center flex-1 gap-4 px-4 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900"
            >
              <RiChat3Line className="box-content p-2 text-yellow-700 bg-yellow-200 rounded-full" />
              <div className="flex flex-col text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo comentario</span>{" "}
                  <span className="text-[8px]">28/02/2024</span>
                </div>
                <p className="text-xs text-gray-500">
                  Grupo 2...
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="flex justify-center p-0 cursor-default hover:bg-transparent">
            <Link
              to="/"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center p-2 transition-colors rounded-lg gap-x-2 hover:bg-red-100">
              <img
                src="https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg"
                className="object-cover w-6 h-6 rounded-full"
              />
              <span className="text-[#6b6f77] ">Grupo 2 THE BEST</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          arrow
          arrowClassName="bg-secondary-100"
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/perfil"
              className="flex items-center flex-1 px-6 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
            >
              <img
                src="https://img.freepik.com/vector-gratis/grupo-personas-sonrientes-felices-mirando-vista-superior-ilustracion-vector-plano-fondo-blanco_1284-78599.jpg"
                className="object-cover w-8 h-8 rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">Grupo 2</span>
                <span className="text-xs text-gray-500">Grupo2@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className="flex items-center flex-1 px-6 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
            >
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/cerrar-sesion"
              className="flex items-center flex-1 px-6 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
            >
              <RiLogoutCircleRLine /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
      
    </header>
  );
};

export default Header;
