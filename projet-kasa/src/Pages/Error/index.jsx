import { useEffect } from 'react';
import React from 'react';
import Header from '../../Components/Header';

function Error() {
    useEffect(() => {
        window.scrollTo(0, 0);
}, []);

return (
    <React.Fragment>
        <Header />
        <section className="error">
            <img src="./../../Assets/404.png" alt="error 404"></img>
        </section>
    </React.Fragment>
    );
};

export default Error;