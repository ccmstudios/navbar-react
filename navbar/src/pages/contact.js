import React from 'react'

class Contact extends React.Component{
    render(){

    return(
        <div>
<form>
    <h1>Contact Us</h1>
    <br/>
    <br/>
    <label>Name</label>
    <input placeholder ='Name'></input>
    <br/>
    <br/>
    <label>Email</label>
    <input placeholder='Email'></input>
    <br/>
    <br/>
    <label>Message</label>
    <textarea> </textarea>
</form>
            </div>

    )
    }
}

export default Contact;