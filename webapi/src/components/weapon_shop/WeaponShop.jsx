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
            img: 'Appistol-icon.webp',
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
            name: 'SNS Pistol',
            price: 1000,
            img: 'Sns-pistol-icon.webp',
            hash: 'weapon_snspistol',
            type: 'pistol'
        },
        {
            id: 8,
            name: 'SNS Pistol Mk II',
            price: 1000,
            img: 'Sns-pistol-mk2-icon.webp',
            hash: 'weapon_snspistol_mk2',
            type: 'pistol'
        },
        {
            id: 9,
            name: 'Heavy Pistol',
            price: 1000,
            img: 'Heavy-pistol-icon.webp',
            hash: 'weapon_heavypistol',
            type: 'pistol'
        },
        {
            id: 10,
            name: 'Vintage Pistol',
            price: 1000,
            img: 'Vintage-pistol-icon.webp',
            hash: 'weapon_vintagepistol',
            type: 'pistol'
        },
        {
            id: 11,
            name: 'Flare Gun',
            price: 1000,
            img: 'Flaregun-icon.webp',
            hash: 'weapon_flaregun',
            type: 'pistol'
        },
        {
            id: 12,
            name: 'Marksman Pistol',
            price: 1000,
            img: '164px-Marksman-pistol-icon.webp',
            hash: 'weapon_marksmanpistol',
            type: 'pistol'
        },
        {
            id: 13,
            name: 'Heavy Revolver',
            price: 1000,
            img: '164px-Heavy-revolver-icon.webp',
            hash: 'weapon_revolver',
            type: 'pistol'
        },
        {
            id: 14,
            name: 'Heavy Revolver Mk II',
            price: 1000,
            img: '164px-Heavy-revolver-mk2-icon.webp',
            hash: 'weapon_revolver_mk2',
            type: 'pistol'
        },
        {
            id: 15,
            name: 'Double Action Revolver',
            price: 1000,
            img: '164px-Double-action-revolver-icon.webp',
            hash: 'weapon_doubleaction',
            type: 'pistol'
        },
        {
            id: 16,
            name: 'Up-n-Atomizer',
            price: 1000,
            img: '164px-Up-n-atomizer-icon.webp',
            hash: 'weapon_raypistol',
            type: 'pistol'
        },
        {
            id: 17,
            name: 'Ceramic Pistol',
            price: 1000,
            img: 'Ceramic-pistol-icon.webp',
            hash: 'weapon_ceramicpistol',
            type: 'pistol'
        },
        {
            id: 18,
            name: 'Navy Revolver',
            price: 1000,
            img: '164px-Navy-revolver-icon.webp',
            hash: 'weapon_navyrevolver',
            type: 'pistol'
        },
        {
            id: 19,
            name: 'Perico Pistol',
            price: 1000,
            img: '164px-Perico-pistol-icon.webp',
            hash: 'weapon_gadgetpistol',
            type: 'pistol'
        },
        {
            id: 20,
            name: 'Stun Gun',
            price: 1000,
            img: 'Stungun-icon.webp',
            hash: 'weapon_stungun_mp',
            type: 'pistol'
        },
        {
            id: 21,
            name: 'Micro SMG',
            price: 1000,
            img: '164px-Micro-smg-icon.webp',
            hash: 'weapon_microsmg',
            type: 'submachine'
        },
        {
            id: 22,
            name: 'SMG',
            price: 1000,
            img: '164px-Smg-icon.webp',
            hash: 'weapon_smg',
            type: 'submachine'
        },
        {
            id: 23,
            name: 'SMG Mk II',
            price: 1000,
            img: '164px-Smg-mk2-icon.webp',
            hash: 'weapon_smg_mk2',
            type: 'submachine'
        },
        {
            id: 24,
            name: 'Assault SMG',
            price: 1000,
            img: '164px-Assault-smg-icon.webp',
            hash: 'weapon_assaultsmg',
            type: 'submachine'
        },
        {
            id: 25,
            name: 'Combat PDW',
            price: 1000,
            img: '164px-Combat-pdw-icon.webp',
            hash: 'weapon_combatpdw',
            type: 'submachine'
        },
        {
            id: 26,
            name: 'Machine Pistol',
            price: 1000,
            img: '164px-Machine-pistol-icon.webp',
            hash: 'weapon_machinepistol',
            type: 'submachine'
        },
        {
            id: 27,
            name: 'Mini SMG',
            price: 1000,
            img: '164px-Mini-smg-icon.webp',
            hash: 'weapon_minismg',
            type: 'submachine'
        },
        {
            id: 28,
            name: 'Unholy Hellbringe',
            price: 1000,
            img: '164px-Unholy-hellbringer-icon.webp',
            hash: 'weapon_raycarbine',
            type: 'submachine'
        },
        {
            id: 29,
            name: 'Pump Shotgun',
            price: 1000,
            img: '164px-Pump-shotgun-icon.webp',
            hash: 'weapon_pumpshotgun',
            type: 'shotguns'
        },
        {
            id: 30,
            name: 'Pump Shotgun Mk II',
            price: 1000,
            img: '164px-Pump-shotgun-mk2-icon.webp',
            hash: 'weapon_pumpshotgun_mk2',
            type: 'shotguns'
        },
        {
            id: 31,
            name: 'Sawed-Off Shotgun',
            price: 1000,
            img: '164px-Sawed-off-shotgun-icon.webp',
            hash: 'weapon_sawnoffshotgun',
            type: 'shotguns'
        },
        {
            id: 32,
            name: 'Assault Shotgun',
            price: 1000,
            img: '164px-Assault-shotgun-icon.webp',
            hash: 'weapon_assaultshotgun',
            type: 'shotguns'
        },
        {
            id: 33,
            name: 'Bullpup Shotgun',
            price: 1000,
            img: '164px-Bullpup-shotgun-icon.webp',
            hash: 'weapon_bullpupshotgun',
            type: 'shotguns'
        },
        {
            id: 34,
            name: 'Musket',
            price: 1000,
            img: '164px-Musket-icon.webp',
            hash: 'weapon_musket',
            type: 'shotguns'
        },
        {
            id: 35,
            name: 'Heavy Shotgun',
            price: 1000,
            img: '164px-Heavy-shotgun-icon.webp',
            hash: 'weapon_heavyshotgun',
            type: 'shotguns'
        },
        {
            id: 36,
            name: 'Double Barrel Shotgun',
            price: 1000,
            img: '164px-Double-barrel-shotgun-icon.webp',
            hash: 'weapon_dbshotgun',
            type: 'shotguns'
        },
        {
            id: 37,
            name: 'Sweeper Shotgun',
            price: 1000,
            img: '164px-Sweeper-shotgun-icon.webp',
            hash: 'weapon_autoshotgun',
            type: 'shotguns'
        },
        {
            id: 38,
            name: 'Combat Shotgun',
            price: 1000,
            img: '164px-Combat-shotgun-icon.webp',
            hash: 'weapon_combatshotgun',
            type: 'shotguns'
        },
        {
            id: 39,
            name: 'Assault Rifle',
            price: 1000,
            img: '164px-Assault-rifle-icon.webp',
            hash: 'weapon_assaultrifle',
            type: 'assault'
        },
        {
            id: 40,
            name: 'Assault Rifle Mk II',
            price: 1000,
            img: '164px-Assault-rifle-mk2-icon.webp',
            hash: 'weapon_assaultrifle_mk2',
            type: 'assault'
        },
        {
            id: 41,
            name: 'Carbine Rifle',
            price: 1000,
            img: '164px-Carbine-rifle-icon.webp',
            hash: 'weapon_carbinerifle',
            type: 'assault'
        },
        {
            id: 42,
            name: 'Carbine Rifle Mk II',
            price: 1000,
            img: '164px-Carbine-rifle-mk2-icon.webp',
            hash: 'weapon_carbinerifle_mk2',
            type: 'assault'
        },
        {
            id: 43,
            name: 'Advanced Rifle',
            price: 1000,
            img: '164px-Advanced-rifle-icon.webp',
            hash: 'weapon_advancedrifle',
            type: 'assault'
        },
        {
            id: 44,
            name: 'Special Carbine',
            price: 1000,
            img: '164px-Special-carbine-icon.webp',
            hash: 'weapon_specialcarbine',
            type: 'assault'
        },
        {
            id: 45,
            name: 'Special Carbine Mk II',
            price: 1000,
            img: '164px-Special-carbine-mk2-icon.webp',
            hash: 'weapon_specialcarbine_mk2',
            type: 'assault'
        },
        {
            id: 46,
            name: 'Bullpup Rifle',
            price: 1000,
            img: '164px-Bullpup-rifle-icon.webp',
            hash: 'weapon_bullpuprifle',
            type: 'assault'
        },
        {
            id: 47,
            name: 'Bullpup Rifle Mk II',
            price: 1000,
            img: '164px-Bullpup-rifle-mk2-icon.webp',
            hash: 'weapon_bullpuprifle_mk2',
            type: 'assault'
        },
        {
            id: 48,
            name: 'Compact Rifle',
            price: 1000,
            img: '164px-Compact-rifle-icon.webp',
            hash: 'weapon_compactrifle',
            type: 'assault'
        },
        {
            id: 49,
            name: 'Military Rifle',
            price: 1000,
            img: '164px-Military-rifle-icon.webp',
            hash: 'weapon_militaryrifle',
            type: 'assault'
        },
        {
            id: 50,
            name: 'Heavy Rifle',
            price: 1000,
            img: '164px-Heavy-rifle-icon.webp',
            hash: 'weapon_heavyrifle',
            type: 'assault'
        },
        {
            id: 51,
            name: 'Tactical Rifle',
            price: 1000,
            img: '164px-Tactical-rifle-icon.webp',
            hash: 'weapon_tacticalrifle',
            type: 'assault'
        },
        {
            id: 52,
            name: 'MG',
            price: 1000,
            img: '164px-Mg-icon.webp',
            hash: 'weapon_mg',
            type: 'light_machine_guns'
        },
        {
            id: 53,
            name: 'Combat MG',
            price: 1000,
            img: '164px-Combat-mg-icon.webp',
            hash: 'weapon_combatmg',
            type: 'light_machine_guns'
        },
        {
            id: 54,
            name: 'Combat MG Mk II',
            price: 1000,
            img: '164px-Combat-mg-mk2-icon.webp',
            hash: 'weapon_combatmg_mk2',
            type: 'light_machine_guns'
        },
        {
            id: 55,
            name: 'Gusenberg Sweeper',
            price: 1000,
            img: '164px-Gusenberg-sweeper-icon.webp',
            hash: 'weapon_gusenberg',
            type: 'light_machine_guns'
        },
        {
            id: 56,
            name: 'Sniper Rifle',
            price: 1000,
            img: '164px-Sniper-rifle-icon.webp',
            hash: 'weapon_sniperrifle',
            type: 'sniper'
        },
        {
            id: 57,
            name: 'Heavy Sniper',
            price: 1000,
            img: '164px-Heavy-sniper-icon.webp',
            hash: 'weapon_heavysniper',
            type: 'sniper'
        },
        {
            id: 58,
            name: 'Heavy Sniper Mk II',
            price: 1000,
            img: '164px-Heavy-sniper-mk2-icon.webp',
            hash: 'weapon_heavysniper_mk2',
            type: 'sniper'
        },
        {
            id: 59,
            name: 'Marksman Rifle',
            price: 1000,
            img: '164px-Marksman-rifle-icon.webp',
            hash: 'weapon_marksmanrifle',
            type: 'sniper'
        },
        {
            id: 60,
            name: 'Marksman Rifle Mk II',
            price: 1000,
            img: '164px-Marksman-rifle-mk2-icon.webp',
            hash: 'weapon_marksmanrifle_mk2',
            type: 'sniper'
        },
        {
            id: 61,
            name: 'Precision Rifle',
            price: 1000,
            img: '164px-Precision-rifle-icon.webp',
            hash: 'weapon_precisionrifle',
            type: 'sniper'
        },
        {
            id: 62,
            name: 'RPG',
            price: 1000,
            img: '164px-Rocket-launcher-icon.webp',
            hash: 'weapon_rpg',
            type: 'heavy_weapons'
        },
        {
            id: 63,
            name: 'Grenade Launcher',
            price: 1000,
            img: '164px-Grenade-launcher-icon.webp',
            hash: 'weapon_grenadelauncher',
            type: 'heavy_weapons'
        },
        {
            id: 64,
            name: 'Grenade Launcher Smoke',
            price: 1000,
            img: '164px-Grenade-launcher-icon.webp',
            hash: 'weapon_grenadelauncher_smoke',
            type: 'heavy_weapons'
        },
        {
            id: 65,
            name: 'Minigun',
            price: 1000,
            img: '164px-Minigun-icon.webp',
            hash: 'weapon_minigun',
            type: 'heavy_weapons'
        },
        {
            id: 66,
            name: 'Firework Launcher',
            price: 1000,
            img: '164px-Firework-launcher-icon.webp',
            hash: 'weapon_firework',
            type: 'heavy_weapons'
        },
        {
            id: 67,
            name: 'Railgun',
            price: 1000,
            img: '164px-Railgun-icon.webp',
            hash: 'weapon_railgun',
            type: 'heavy_weapons'
        },
        {
            id: 68,
            name: 'Homing Launcher',
            price: 1000,
            img: '164px-Homing-launcher-icon.webp',
            hash: 'weapon_hominglauncher',
            type: 'heavy_weapons'
        },
        {
            id: 69,
            name: 'Compact Grenade Launcher',
            price: 1000,
            img: '164px-Grenade-compact-launcher-icon.webp',
            hash: 'weapon_compactlauncher',
            type: 'heavy_weapons'
        },
        {
            id: 70,
            name: 'Widowmaker',
            price: 1000,
            img: '164px-Widowmaker-icon.webp',
            hash: 'weapon_rayminigun',
            type: 'heavy_weapons'
        },
        {
            id: 71,
            name: 'Compact EMP Launcher',
            price: 1000,
            img: '164px-EMP-launcher-icon.webp',
            hash: 'weapon_emplauncher',
            type: 'heavy_weapons'
        },
        {
            id: 72,
            name: 'Grenade',
            price: 1000,
            img: 'Grenade-icon.webp',
            hash: 'weapon_grenade',
            type: 'throwables'
        },
        {
            id: 73,
            name: 'BZ Gas',
            price: 1000,
            img: '56px-Bz-gas-icon.webp',
            hash: 'weapon_bzgas',
            type: 'throwables'
        },
        {
            id: 74,
            name: 'Molotov Cocktail',
            price: 1000,
            img: '120px-Molotov-icon.webp',
            hash: 'weapon_molotov',
            type: 'throwables'
        },
        {
            id: 75,
            name: 'Sticky Bomb',
            price: 1000,
            img: '120px-Molotov-icon.webp',
            hash: 'weapon_stickybomb',
            type: 'throwables'
        },
        {
            id: 76,
            name: 'Proximity Mines',
            price: 1000,
            img: 'Proximity-mines-icon.webp',
            hash: 'weapon_proxmine',
            type: 'throwables'
        },
        {
            id: 77,
            name: 'Snowballs',
            price: 1000,
            img: 'Snowball-icon.webp',
            hash: 'weapon_snowball',
            type: 'throwables'
        },
        {
            id: 78,
            name: 'Pipe Bombs',
            price: 1000,
            img: '164px-Pipe-bomb-icon.webp',
            hash: 'weapon_pipebomb',
            type: 'throwables'
        },
        {
            id: 79,
            name: 'Baseball',
            price: 1000,
            img: 'Ball-icon.webp',
            hash: 'weapon_ball',
            type: 'throwables'
        },
        {
            id: 80,
            name: 'Tear Gas',
            price: 1000,
            img: '56px-Tear-gas-icon.webp',
            hash: 'weapon_smokegrenade',
            type: 'throwables'
        },
        {
            id: 81,
            name: 'Flare',
            price: 1000,
            img: 'Flare-icon.webp',
            hash: 'weapon_flare',
            type: 'throwables'
        },
        {
            id: 82,
            name: 'Jerry Can',
            price: 1000,
            img: '94px-Petrolcan-icon.webp',
            hash: 'weapon_petrolcan',
            type: 'miscellaneous'
        },
        {
            id: 83,
            name: 'Parachute',
            price: 1000,
            img: '93px-Parachute-icon.webp',
            hash: 'gadget_parachute',
            type: 'miscellaneous'
        },{
            id: 84,
            name: 'Fire Extinguisher',
            price: 1000,
            img: '51px-Fire2.webp',
            hash: 'weapon_fireextinguisher',
            type: 'miscellaneous'
        },
    ];

    const buyWeapon = (weapon) => {
        alt.emit('client.shop.buy', weapon);
    }

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
                    <div className="products_box__item__buy" onClick={() => buyWeapon(weapon.hash)}>
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