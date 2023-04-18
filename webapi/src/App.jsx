import { useState, useEffect } from 'react';
import './assets/App.css';
import WeaponShop from './components/weapon_shop/WeaponShop.jsx';
import VehicleShop from './components/VehicleShop.jsx';
import Auth from './components/Auth.jsx';

function App() {
    const [page, setPage] = useState('weapon_shop');

    const handlePageChange = (page) => {
        setPage(page);
    }

    useEffect(() => {
        if ('alt' in window) {
            alt.on('setPage', page => {
                handlePageChange(page);
            });
        }
    });

    const renderPage = () => {
        switch (page) {
            case 'auth':
                return <Auth handlePageChange={handlePageChange} />;
            case 'weapon_shop':
                return <WeaponShop/>;
            case 'vehicle_shop':
                return <VehicleShop/>;
        }
    };

    return (
        <div className="App">
            {renderPage()}
        </div>
    );
}

export default App;
