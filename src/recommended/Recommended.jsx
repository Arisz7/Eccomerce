import React from 'react'
import './recommended.css';
import Button from '../components/Button';


function Recommended({ handleClick }) {
    return (
        <>
            <div>
                <div class="recommended-title">
                    <h1 class="font-bold text-3xl mb-10">Recomendado</h1>
                </div>
                <div className="recommended-flex hidden md:flex font-semibold text-white mb-20 text-lg">
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
                        value="Kit"
                        title="Kit"
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