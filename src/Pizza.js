import React from 'react'

export default function Pizza(props){
    const { values, change, submit, disabled } = props

    return(
        <form className='form-container' onSubmit={submit}>
            <div className='pizza-container'>
                <h3>Build Your Own Pizza</h3>

                <div className='name-container'>
                    
                    <label>Enter name for the order:
                        <input 
                            onChange={change}
                            value={values.name}
                            type='input'
                            name='name'
                        />
                    </label>
                </div>
                
                <div className='size-container'>
                <h3>Choice of Size</h3>
                <label>
                    <select 
                        name='size'
                        onChange={change}
                        value={values.size}
                    >
                        <option value=''>--Select--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                </div>



                <div className='toppings-container'>
                    <h3>Choice of Toppings</h3>
                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            onChange={change}
                            value={values.pepperoni}
                        />
                    </label>
                    <label>Sausauge
                        <input
                            type='checkbox'
                            name='sausage'
                            onChange={change}
                            value={values.sausage}
                        />
                    </label>
                    <label>Meatball
                        <input
                            type='checkbox'
                            name='meatball'
                            onChange={change}
                            value={values.meatball}
                        />
                    </label>
                    <label>Onion
                        <input
                            type='checkbox'
                            name='onion'
                            onChange={change}
                            value={values.onion}
                        />
                    </label>
                    
                </div>



                <div className='instructions-container'>
                    <h3>Special Instructions</h3>
                    <label>Special Instructions?
                        <input 
                            type='input'
                            name='instructions'
                            onChange={change}
                            value={values.instructions}
                        />
                    </label>
                </div>

                

            </div>
            <button id='submitBtn' disabled={disabled}>Submit Order!</button>
        </form>
    )
}