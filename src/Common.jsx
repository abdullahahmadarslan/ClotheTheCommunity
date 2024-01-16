import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';


const Common = (props) => {
    // 
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row ">
                            <div className="col-6 d-flex justify-content-center align-items-end mt-5">
                                <div className="container-fluid ">
                                    <h1 className='h1'>{props.h1i} <br /><strong className='positive'>{props.strong}</strong></h1>
                                    <p className='p mt-5'>{props.pi}  <strong className='positive'>{props.strongii}</strong> {props.pii}</p>
                                    <Button onClick={() => {
                                        navigate(props.to);
                                    }} variant="outlined" className='donate-btn'>{props.btnText}</Button>
                                </div>

                            </div>
                            <div className="img-container col-6 d-flex justify-content-end align-content-end " >
                                <img class="img-fluid img-home rounded" src={props.img} alt="charity-pic" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Common;