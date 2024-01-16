import React from 'react'
import Common from "./Common"

const Home = () => {
    return (
        <>
            <Common
                h1i={"donate for a"}
                strong={"BETTER CAUSE!"}
                pi={"Striving to make the world"}
                strongii={"BETTER PLACE"}
                pii={"for many."}
                btnText={"DONATE NOW"}
                to={"/donate"}
                img={"Images/charity2.jpg"}
            />
        </>
    )
}

export default Home;