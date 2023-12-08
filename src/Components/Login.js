import React, { useState } from "react";
import { BiCopyright } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { DropdownMenu, DropdownToggle, DropdownItem } from "react-bootstrap";

import fondoCelularUno from "../assets/imagenes-celular/fondoCelularUno.png";
import fondoCelularDos from "../assets/imagenes-celular/fondoCelularDos.png";
import fondoCelularTres from "../assets/imagenes-celular/fondoCelularTres.png";
import fondoCelularCuatro from "../assets/imagenes-celular/fondoCelularCuatro.png";

function Login() {
  //Para botón de usuario
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //Para botón de contraseña
  const [inputValuePassword, setInputValuePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChangePassword = (event) => {
    setInputValuePassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="contenedor-principal-instagram">
      <div className="contenedor-celulares">
        <div className="maqueta-celular">
          <img src="../maqueta-celular-dos.png" alt=" " />
        </div>
        <div className="imagenes-celulares">
          <img
            className="fondo-celular uno"
            src={fondoCelularUno}
            alt="fondo de celular uno"
          />
          <img
            className="fondo-celular dos"
            src={fondoCelularDos}
            alt="fondo de celular dos"
          />
          <img
            className="fondo-celular tres"
            src={fondoCelularTres}
            alt="fondo de celular tres"
          />
          <img
            className="fondo-celular cuatro"
            src={fondoCelularCuatro}
            alt="fondo de celular cuatro"
          />
        </div>
      </div>
      <div className="contenedor-login">
        <div className="estructura-login">
          <div className="contenedor-estructura-login">
            <div className="contenedor-imagen-logo">
              <img
                className="logo-instagram"
                src="./logotipo_instagram.png"
                alt="Logo de instagram"
              />
            </div>
            <div className="apartados-login">
              <form className="formulario-login">
                <div className="elementos-login">
                  <div className="boton-usuario">
                    <div
                      className={`input-wrapper ${inputValue ? "active" : ""}`}
                    >
                      <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={() => setInputValue("")}
                        onBlur={() => {
                          if (!inputValue) {
                            setInputValue("");
                          }
                        }}
                      />
                      <label className="texto-input">
                        Teléfono, usuario o correo electrónico
                      </label>
                    </div>
                  </div>
                  {/* -----------  Botón de contraseña -------- */}
                  <div className="contenedor-boton-contraseña">
                    <div
                      className={`input-wrapper-contraseña ${
                        inputValuePassword ? "active" : ""
                      }`}
                    >
                      <input
                        className="boton-contraseña"
                        name="password"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={inputValuePassword}
                        onChange={handleInputChangePassword}
                        onFocus={() => setInputValuePassword("")}
                        onBlur={() => {
                          if (!inputValuePassword) {
                            setInputValuePassword("");
                          }
                        }}
                      ></input>
                      {inputValuePassword && (
                        <button
                          className="toggle-button"
                          type="button"
                          id="toggleButton"
                          onClick={toggleShowPassword}
                        >
                          {showPassword ? "Ocultar" : "Mostrar"}
                        </button>
                      )}
                      <label for="password" className="texto-password">
                        Contraseña
                      </label>
                    </div>
                  </div>
                  {/* -----------  Botón de contraseña -------- */}
                  <div className="boton-inicio-sesion">
                    <button>Iniciar sesión</button>
                  </div>
                  <div className="separador-login">
                    <hr className="separador-texto-uno" />
                    <p className="separador-letra"> o </p>
                    <hr className="separador-texto-dos" />
                  </div>
                  <div className="iniciar-sesion-facebook">
                    <img
                      src="./logo-facebook.png"
                      className="icono-facebook"
                      alt="icono de facebook"
                    />
                    <h2 className="texto-inicio-sesion">
                      Iniciar sesión con Facebook
                    </h2>
                  </div>
                  <div className="nueva-contraseña">
                    <p className="olvido-contraseña">
                      ¿Olvidaste tu contraseña?
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="contenedor-crear-cuenta">
            <p className="texto-cuenta-nueva">¿No tienes una cuenta?</p>
            <span className="texto-registro-cuenta">Regístrate</span>
          </div>
          <div className="descargar-aplicacion">
            <div className="parrafo-descarga">
              <p className="texto-descargar-aplicacion">Descarga la app.</p>
            </div>
            <div className="imagenes-descarga">
              <img
                className="descarga-app-store"
                src="./descargar-app-store.png"
                alt="Descargar en la app store"
              />
              <img
                className="descarga-google-play"
                src="./descargar-google-play.png"
                alt="Descargar en google play"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------- footer ----------------------- */}
      <footer className="contenedor-footer">
        <ul className="fila-enlaces">
          <li className="linea-enlace" href="/">
            Meta
          </li>
          <li className="linea-enlace" href="/">
            Información
          </li>
          <li className="linea-enlace" href="/">
            Blog
          </li>
          <li href="/">Empleo</li>
          <li className="linea-enlace" href="/">
            Ayuda
          </li>
          <li className="linea-enlace" href="/">
            API
          </li>
          <li href="/">Privacidad</li>
          <li href="/">Condiciones</li>
          <li href="/">Ubicaciones</li>
          <li href="/">Instagram Lite</li>
          <li className="linea-enlace" href="/">
            Threads
          </li>
          <li href="/">Subir contactos y no usuarios</li>
          <li className="linea-enlace" href="/">
            Meta Verified
          </li>
        </ul>
        <div className="fila-copyright">
          {/* Dropdown con react bootstrap */}
          <div className="Selector-de-lenguaje">
            <Dropdown>
              <DropdownToggle className="Dropdown-de-lenguaje">
                Lenguaje
                <div className="icono-flecha">
                  <BsChevronDown />
                </div>
              </DropdownToggle>

              <DropdownMenu className="opciones-de-lenguaje">
                <DropdownItem>Español</DropdownItem>
                <DropdownItem>Español (España)</DropdownItem>
                <DropdownItem>English (UK)</DropdownItem>
                <DropdownItem>Italiano</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="parte-copyright">
            <div className="icono-copyright">
              <BiCopyright />
            </div>
            <p className="texto-meta"> 2023 Instagram from Meta</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
