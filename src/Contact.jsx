import React from 'react'
import Button from '@mui/material/Button';

const Contact = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row ">
                            <div className="col-6 d-flex justify-content-center align-items-start forM">
                                <div className="container-fluid ">
                                    <form >
                                        <div class="form-floating my-4">
                                            <input type="text" class="form-control" id="firstName" placeholder="Enter First Name" name="firstName" required />
                                            <label for="firstName">First Name</label>
                                        </div>
                                        <div class="form-floating my-4">
                                            <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name" name="lastName" required />
                                            <label for="lastName">Last Name</label>
                                        </div>
                                        <div class="form-floating my-4">
                                            <input type="email" class="form-control" id="email" placeholder="Enter Email" name="email" required />
                                            <label for="email">Email</label>
                                        </div>
                                        <div class="form-floating my-4">
                                            <input type="number" class="form-control" id="phoneNumber" placeholder="Enter phoneNumber" name="phoneNo" required />
                                            <label for="amount">Phone Number</label>
                                        </div>

                                        <label for="comment">Message:</label>
                                        <textarea class="form-control" rows="5" id="comment" name="text"></textarea>

                                        <div className="my-4 ">
                                            <Button variant="contained" className='donate-btn' style={{ backgroundColor: "white" }}>
                                                SUBMIT
                                            </Button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className="img-container col-6 d-flex justify-content-end align-content-end " >
                                <img class="img-flui rounded img-donation" src="Images/ContactUs.jpg" alt="donation pic" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>



    )
}

export default Contact;