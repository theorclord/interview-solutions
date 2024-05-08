import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios';
import DeviceAPIService from '../Services/Services';
import ElectronicDeviceDTO from '../Models/ElectronicDeviceDTO';
import { InputText } from 'primereact/inputtext';
import ElectroniceDeviceForm from './ElectronicDeviceForm';
import { PrimeReactProvider } from 'primereact/api';
import Edit from '../Pages/Edit';
import Home from '../Pages/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {

    return (
    <PrimeReactProvider>
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
        </Router>
    </PrimeReactProvider>
    );

}

export default App;