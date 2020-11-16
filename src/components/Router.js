import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Menu from "./menu/menu";
import Videos from "./videos/Videos";
import Imagenes from "./imagenes/Imagenes";
import Carrusel from "./carrusel/Carrusel";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          {/* <Route
            exact
            path="/empleadosdetalles/:idempleado"
            component={Departamentos}
            render={(props) => {
              var idemp = props.match.params.idempleado;
              console.log("Id " + idemp);
              return <EmpleadosDetalles idempleado={idemp} />;
            }}
          /> */}
          <Route exact path="/" component={Videos} />
          <Route exact path="/images" component={Imagenes} />
          <Route exact path="/carousel" component={Carrusel} />
        </Switch>
      </BrowserRouter>
    );
  }
}
