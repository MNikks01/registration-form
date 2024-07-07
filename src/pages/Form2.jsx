import React, { useState } from 'react'

const Form2 = () => {

    // every property name must match with the id's mentioned in all the inputs
    const [form, setform] = useState({
        inpFName: '',
        inpLName: '',
        inpEmail: '',
        inpPass: '',
        inpCnfPass: '',
        inpDob: '',
        selectState: '',
        inpCity: '',
        inpPinCode: '',
    })
    const handleFormElements = (event) => {
        setform(prev => {
            return {
                ...prev,
                [event.target.id]: event.target.value
            }
        })
    }

    const [errors, seterrors] = useState({
        errFName: '', errLName: ''
    })

    const handleSubmit = (e) => {
        if (form.inpFName && form.inpLName) {
            //
        } else {
            if (!form.inpFName) { seterrors(prev => { return { ...prev, [e.target.id]: 'required' } }) }
            if (!form.inpLName) { seterrors(prev => { return { ...prev, [e.target.id]: 'required' } }) }

        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="first name"
                id="inpFName"
                value={form.inpFName}
                onChange={handleFormElements}
            />
            <label id="errFName" style={{ color: 'red' }}>{errors.errFName}</label>


            <br /><br />
            <input
                type="text"
                placeholder="last name"
                id="inpLName"
                value={form.inpLName}
                onChange={handleFormElements}
            />
            <label id="errFName" style={{ color: 'red' }}>{errors.errLName}</label>

            <br /><br />
            <input
                type="email"
                placeholder="email"
                id="inpEmail"
                value={form.inpEmail}
                onChange={handleFormElements}
            />

            <br /><br />
            <input
                type="password"
                placeholder="password"
                id="inpPass"
                value={form.inpPass}
                onChange={handleFormElements}
            />

            <br /><br />
            <input
                type="password"
                placeholder="confirm password"
                id="inpCnfPass"
                value={form.inpCnfPass}
                onChange={handleFormElements}
            />

            <br /><br />
            <input
                type="date"
                id="inpDob"
                value={form.inpDob}
                onChange={handleFormElements}
            />

            <br /><br />
            <input
                type="text"
                placeholder="city"
                id="inpCity"
                value={form.inpCity}
                onChange={handleFormElements}
            />

            <br /><br />
            <input
                type="number"
                placeholder="pin code"
                id="inpPinCode"
                value={form.inpPinCode}
                onChange={handleFormElements}
            />
            <br /><br />

            <select
                id="selectState"
                value={form.selectState}
                onChange={handleFormElements}
            >
                <option value="MH">MH</option>
                <option value="Goa">Goa</option>
                <option value="MP">MP</option>
                <option value="Gujrat">Gujrat</option>
                <option value="HP">HP</option>
            </select>
            <br /><br />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Form2