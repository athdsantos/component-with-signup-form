import { useState } from "react"

export function Forms() {

    return (
        <div className="boxDefault boxForms">
            <a href="/" className="tryFreeButton"><p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p></a>
            <form className="forms">
                <input type="text" name="firstName" id="firstName" placeholder="First name" required />
                <input type="text" name="lastName" id="lastName" placeholder="Last name" required />
                <input type="email" name="email" id="email" placeholder="Email address" required />
                <input type="password" name="passwd" id="passwd" placeholder="Password" required />
                <button type="submit">CLAIM YOUR FREE TRIAL</button>
                <p>By clicking the button, you are agreeing to our <a href="/" className="term">Terms and services</a></p>
            </form>
        </div>
    )
}