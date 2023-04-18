import React from 'react';
import '../../assets/WeaponShop.css';
import WeaponMenu from './WeaponMenu.jsx';
const WeaponShop = () => {
    const [weaponType, setWeaponType] = React.useState('pistol');

    const handleWeaponType = (type) => {
        setWeaponType(type);
    }

    const weapons = [
        {
            id: 1,
            name: 'Pistol',
            price: 1000,
            img: 'Pistol-icon.png',
            hash: 'weapon_pistol',
            type: 'pistol'
        },
        {
            id: 2,
            name: 'Pistol Mk II',
            price: 1000,
            img: 'Pistol-mk2-icon.png',
            hash: 'weapon_pistol_mk2',
            type: 'pistol'
        },
        {
            id: 3,
            name: 'Combat Pistol',
            price: 1000,
            img: 'Combat-pistol-icon.webp',
            hash: 'weapon_combatpistol',
            type: 'pistol'
        },
        {
            id: 4,
            name: 'AP Pistol',
            price: 1000,
            img: 'Combat-pistol-icon.webp',
            hash: 'weapon_appistol',
            type: 'pistol'
        },
        {
            id: 5,
            name: 'Stun Gun',
            price: 1000,
            img: 'Stungun-icon.webp',
            hash: 'weapon_stungun',
            type: 'pistol'
        },
        {
            id: 6,
            name: 'Pistol .50',
            price: 1000,
            img: 'Pistol.webp',
            hash: 'weapon_pistol50',
            type: 'pistol'
        },
        {
            id: 7,
            name: 'Pistol .50',
            price: 1000,
            img: 'Pistol.webp',
            hash: 'weapon_pistol50',
            type: 'pistol'
        },
    ];


    const renderProducts = () => {
        return weapons.filter((weapon) => weapon.type === weaponType).map((weapon) => {
            return (
                <div key={weapon.id} className="products_box__item">
                    <div className="products_box__item__img">
                        <img src={`./weapons/${weapon.img}`} alt="weapon"/>
                    </div>
                    <div className="products_box__item__name">
                        <p>{weapon.name}</p>
                    </div>
                    <div className="products_box__item__price">
                        <p>{weapon.price}$</p>
                    </div>
                    <div className="products_box__item__buy">
                        Купить
                    </div>
                </div>
            );
        });
    }

    return (
        <div className={'container'}>
            <div className="col">
                <div className={'products_box'}>
                    <WeaponMenu
                        handleWeaponType={handleWeaponType}
                        weaponType={weaponType}
                    />
                    <div className="products_box__items">
                        {renderProducts()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeaponShop;