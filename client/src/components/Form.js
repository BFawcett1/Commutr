import React from 'react'

const Form = () => {

    return (
        <div className="form">
            <form  className="form__container">
                    <div className="form__box">
                        <h6 className="form__label">Method of Payment</h6>
                        <select>
                            <option value="cash">Cash Fare</option>
                            <option value="stored">Stored Value</option>
                            <option value="monthly">Monthly Pass</option>
                        </select>
                    </div>
                <div>
                </div>
                    <div form__box>
                        <h6 className="form__label">Date</h6>
                        <input className="form__box" type="text" name="Date" placeholder="yyyy-mm-dd" />
                    </div>
                    <div className="form__box">
                        <h6 className="form__label">Number of Zones</h6>
                        <select>
                            <option value="One">1</option>
                            <option value="Two">2</option>
                            <option valu="Three">3</option>
                        </select>
                    </div>
                <div className="form__btn-container">
                    <button type='submit' className="btn-save">SAVE</button>
                </div>
            </form>
        </div>
    );
}

export default Form;