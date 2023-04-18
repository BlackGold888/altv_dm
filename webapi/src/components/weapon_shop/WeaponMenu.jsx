import React from 'react';

const WeaponMenu = ({ handleWeaponType, weaponType }) => {
    const getClassName = (type) => {
        if (type === weaponType) {
            return 'products_menu__item products_menu__item__active';
        } else {
            return 'products_menu__item';
        }
    }

    return (
        <div className={'products_menu'}>
            <div
                className={getClassName('pistol')} onClick={() => handleWeaponType('pistol')}>
                <div className="products_menu__item__name">Пистолеты</div>
            </div>
            <div className={getClassName('shotguns')} onClick={() => handleWeaponType('shotguns')}>
                <div className="products_menu__item__name">Ружья</div>
            </div>
        </div>
    );
};

export default WeaponMenu;