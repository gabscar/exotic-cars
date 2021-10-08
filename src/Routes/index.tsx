  
import React from 'react';
import { Switch, Route,BrowserRouter,Redirect } from 'react-router-dom';
import Header from '../Components/Header/Header';
import DetailCar from '../Screens/detail/DetailCar';
import ListCars from '../Screens/ListCars/ListCars';
import Style from '../Style';


const Routes: React.FC = () => {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact >
                        <ListCars/>
                    </Route>
                    <Route path= "/detail/:name" exact >
                        <DetailCar/>
                    </Route>
                    <Route path = "*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Style/>
        </>
    );
  };
  
export default Routes;