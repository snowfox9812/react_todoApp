import React  from 'react';
import {
    useLocation
  } from "react-router-dom";

function NotFound() {
    let location = useLocation();
    return (
        <h2 className="text-white">Oops, Page <code>{location.pathname}</code> not found</h2>
    );
}
export default NotFound;