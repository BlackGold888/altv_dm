import React from 'react';
import '../assets/Auth.css';

const Auth = ({ handlePageChange }) => {
    const fractionSelect = (fraction) => {
        //eslint-disable-next-line no-console
        alt.emit('auth.select.fraction', fraction);
        handlePageChange('');
    }

    return (
        <div className={'container'}>
            <div className="col usa" onClick={() => fractionSelect('usa')}></div>
            <div className="col ru" onClick={() => fractionSelect('ru')}></div>
        </div>
    );
};

export default Auth;