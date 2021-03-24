import logo from './logo.svg';
import './App.css';
import React from 'react'
import ItemsViewer from "./components/ItemsViewer";
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
    return (
        <div>
            <ItemsViewer/>
        </div>)
}

export default App;
