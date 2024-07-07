import { useState } from "react"

const Form1 = () => {

    const [fName, setfName] = useState('')
    const handleFName = (event) => {
        setfName(event.target.value)
    }

    const [lName, setlName] = useState('')
    const handleLName = (event) => {
        setlName(event.target.value)
    }

    const [email, setemail] = useState('')
    const handleEmail = (event) => {
        setemail(event.target.value)
    }

    const [pwd, setpwd] = useState('')
    const handlePwd = (event) => {
        setpwd(event.target.value)
    }

    const [cnfPwd, setcnfPwd] = useState('')
    const handleCnfPwd = (event) => {
        setcnfPwd(event.target.value)
    }

    const [dob, setdob] = useState('')
    const handleDob = (event) => {
        setdob(event.target.value)
    }

    const [city, setcity] = useState('')
    const handleCity = (event) => {
        setcity(event.target.value)
    }

    const [pinCode, setpinCode] = useState('')
    const handlePinCode = (event) => {
        setpinCode(event.target.value)
    }

    const [state, setstate] = useState('')
    const handleState = (event) => {
        setstate(event.target.value)
    }

    const [gender, setgender] = useState('')
    const handleGender = (event) => {
        setgender(event.target.value)
    }

    const [courses, setcourses] = useState([])
    const handleCourses = (event) => {
        if (event.target.checked) {
            setcourses([...courses, event.target.value])
        } else {
            // setcourses(courses.filter((course) => course !== event.target.value))

            const index = courses.indexOf(event.target.value)
            courses.splice(index, 1)
        }
    }

    console.log('fname =>', fName);
    console.log('lname =>', lName);
    console.log('email =>', email);
    console.log('pwd =>', pwd);
    console.log('cnfpwd =>', cnfPwd);
    console.log('dob =>', dob);
    console.log('city =>', city);
    console.log('pincode =>', pinCode);
    console.log('state =>', state);
    console.log('gender =>', gender);
    console.log('courses =>', courses);

    return (
        <div>
            <input
                type="text"
                placeholder="first name"
                id="inpFName"
                value={fName}
                onChange={handleFName}
            />
            <label id="errFName"
            >First Name is required</label>
            <br /><br />
            <input
                type="text"
                placeholder="last name"
                id="inpLName"
                value={lName}
                onChange={handleLName}
            />
            <label id="errLName"
            >Last Name is required</label>
            <br /><br />
            <input
                type="email"
                placeholder="email"
                id="inpEmail"
                value={email}
                onChange={handleEmail}
            />
            <label id="errEmail"
            >Email is required</label>
            <label id="errEmailFormat"
            >Email is not valid</label>
            <br /><br />
            <input
                type="password"
                placeholder="password"
                id="inpPass"
                value={pwd}
                onChange={handlePwd}
            />
            <label id="errPass"
            >Password is required</label>
            <br /><br />
            <input
                type="password"
                placeholder="confirm password"
                id="inpCnfPass"
                value={cnfPwd}
                onChange={handleCnfPwd}
            />
            <label id="errCnfPass"
            >Confirm Password is required</label>
            <label id="errMatch"
            >Password and Confirm Password not matching</label>
            <br /><br />
            <input
                type="date"
                id="inpDob"
                value={dob}
                onChange={handleDob}
            />
            <label id="errDob"
            >Date of Birth is required</label>
            <br /><br />
            <input
                type="text"
                placeholder="city"
                id="inpCity"
                value={city}
                onChange={handleCity}
            />

            <br /><br />
            <input
                type="number"
                placeholder="pin code"
                id="inpPinCode"
                value={pinCode}
                onChange={handlePinCode}
            />
            <br /><br />

            <select
                id="selectState"
                value={state}
                onChange={handleState}
            >
                <option value="MH">MH</option>
                <option value="Goa">Goa</option>
                <option value="MP">MP</option>
                <option value="Gujrat">Gujrat</option>
                <option value="HP">HP</option>
            </select>
            <br /><br />

            <input
                type="radio"
                value="male"
                name="gender"
                id="radioMale"
                onClick={handleGender}
            />
            <label>male</label>
            <br />
            <input
                type="radio"
                value="female"
                name="gender"
                id="radioFemale"
                onClick={handleGender}
            />
            <label>female</label>
            <br />
            <input
                type="radio"
                value="others"
                name="gender"
                id="radioOthers"
                onClick={handleGender}
            />
            <label>others</label>
            <br />
            <label id="errGender">
                please select your gender</label
            >
            <br /><br />

            <input
                type="checkbox"
                id="chkHTML"
                value={'HTML'}
                onClick={handleCourses}
            />
            <label >HTML</label>
            <br />
            <input
                type="checkbox"
                id="chkCSS"
                value={'CSS'}
                onClick={handleCourses}
            />
            <label >CSS</label>
            <br />
            <input
                type="checkbox"
                id="chkJS"
                value={'JS'}
                onClick={handleCourses}
            />
            <label >JS</label>
            <br />
            <input
                type="checkbox"
                id="chkReact"
                value={'React'}
                onClick={handleCourses}
            />
            <label>React</label>
            <br />
            <label id="errCourses">
                please select your courses</label>
            <br /><br />

            <button>Submit</button>
        </div>
    )
}

export default Form1