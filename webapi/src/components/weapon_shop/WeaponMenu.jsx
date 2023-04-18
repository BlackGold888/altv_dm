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
            <div className={getClassName('submachine')} onClick={() => handleWeaponType('submachine')}>
                <div className="products_menu__item__name">Пистолеты-пулеметы</div>
            </div>
            <div className={getClassName('assault')} onClick={() => handleWeaponType('assault')}>
                <div className="products_menu__item__name">Штурмовые винтовки</div>
            </div>
            <div className={getClassName('light_machine_guns')} onClick={() => handleWeaponType('light_machine_guns')}>
                <div className="products_menu__item__name">Легкие пулеметы</div>
            </div>
            <div className={getClassName('sniper')} onClick={() => handleWeaponType('sniper')}>
                <div className="products_menu__item__name">Снайперские винтовки</div>
            </div>
            <div className={getClassName('heavy_weapons')} onClick={() => handleWeaponType('heavy_weapons')}>
                <div className="products_menu__item__name">Тяжелое оружие</div>
            </div>
            <div className={getClassName('throwables')} onClick={() => handleWeaponType('throwables')}>
                <div className="products_menu__item__name">Метательные предметы</div>
            </div>
            <div className={getClassName('miscellaneous')} onClick={() => handleWeaponType('miscellaneous')}>
                <div className="products_menu__item__name">Прочее</div>
            </div>
        </div>
    );
};

export default WeaponMenu;