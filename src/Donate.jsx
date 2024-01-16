import React from 'react'
import Button from '@mui/material/Button';

const Donate = () => {
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
                                        <div className='form-floating my-4'>
                                            <select class="form-select form-select-md " required>
                                                <option>Payment Method</option>
                                                <option>Easy Paisa</option>
                                                <option>Jazz Cash</option>
                                            </select>
                                        </div>
                                        <div class="form-floating my-4">
                                            <input type="number" class="form-control" id="amount" placeholder="Enter Amount" name="pswd" required />
                                            <label for="amount">Enter Amount</label>
                                        </div>
                                        <div class="form-check my-4">
                                            <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" required />
                                            <label class="form-check-label">Are you sure you want do donate?</label>
                                        </div>
                                        <div className="my-4 ">
                                            <Button variant="contained" color="success">
                                                DONATE
                                            </Button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className="img-container col-6 d-flex justify-content-end align-content-end " >
                                <img class="img-flui rounded img-donation" src="Images/donation.jpg" alt="donation pic" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>



    )
}

export default Donate;