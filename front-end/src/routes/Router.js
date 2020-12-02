import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Screens/LoginPage/LoginPage";
import SignUpPage from "../Screens/SignUpPage/SignUpPage";


// import FeedPage from "../pageScreens/FeedPage/FeedPage";
// import SplashPage from "../pageScreens/splashPage/SplashPage";
// import SignUpAdressPage from "../pageScreens/signUpAdressPage/SignUpAdressPage";
// import RestaurantePage from "../pageScreens/RestaurantPage/RestaurantPage";
// import CartPage from "../pageScreens/CartPage/CartPage";
// import ProfilePage from "../pageScreens/ProfilePage/ProfilePage";
// import ProfileEditPage from "../pageScreens/ProfileEditPage/ProfileEditPage";
// import EditAdressPage from "../pageScreens/ProfileEditAdressPage/EditAdressPage";
// import ErrorPage from "../pageScreens/ErrorPage/ErrorPage"
// import Card from "../pageScreens/RestaurantPage/Card"
// import RestaurantSearchPage from "../pageScreens/RestaurantSearchPage/RestaurantSearchPage";


export default function Router() {
// const [cartProducts, setCartProducts] = useState([])

 return (
        <div>
            <BrowserRouter>
                <Switch>

                    {/* <Route exact path="/">
                        <SplashPage />
                    </Route> */}
                    <Route exact path="/">
                      <LoginPage />
                    </Route>
                    <Route exact path="/user">
                        <SignUpPage />
                    </Route>
                    {/* <Route exact path="/endereco">
                     <SignUpAdressPage />
                    </Route>
                    <Route exact path="/restaurantes">
                    <FeedPage />
                    </Route>
                    <Route exact path="/restaurantes/busca">
                    <RestaurantSearchPage />
                    </Route>
                    <Route exact path="/restaurantes/:id">
                   <RestaurantePage
                   cartProducts = {cartProducts}
                   setCartProducts = {setCartProducts} />
                    </Route>
                    <Route exact path="/carrinho">
                   <CartPage 
                   cartProducts = {cartProducts}
                   setCartProducts = {setCartProducts}/>
                    </Route>
                    <Route exact path="/perfil">
                    <ProfilePage />
                    </Route>
                    <Route exact path="/perfil/editar">
                   <ProfileEditPage />
                    </Route>
                    <Route exact path="/perfil/endereco">
                   <EditAdressPage />
                    </Route> */}
                    {/* <Route exact path="/restaurantespage">
                   <RestaurantConfirmPage />
                    </Route> */}
                    {/* <Route>
                        <ErrorPage />
                    </Route> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
 }
