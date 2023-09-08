import React from 'react'
import './recommended.css';
import Button from '../components/Button';


function Recommended({ handleClick }) {
    return (
        <>
            <div>
                <h2 className='recommended-title'>Recomendado</h2>
                <div className="recommended-flex hidden md:flex font-semibold text-white">
                    <Button
                        onClickHandler={handleClick}
                        value=""
                        title="All Products"
                    />
                    <Button
                        onClickHandler={handleClick}
                        value="Victoria Secret's"
                        title="Victoria Secret's"
                    />
                    <Button
                        onClickHandler={handleClick}
                        value="Vannity"
                        title="Vannity"
                    />
                    <Button
                        onClickHandler={handleClick}
                        value="Adidas"
                        title="Adidas"
                    />
                    <Button
                        onClickHandler={handleClick}
                        value="Puma"
                        title="Puma"
                    />
                    <Button
                        onClickHandler={handleClick}
                        value="Vans"
                        title="Vans"
                    />
                </div>
            </div>
        </>
    );
}

export default Recommended