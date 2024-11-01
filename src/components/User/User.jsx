import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()
    return ( 
        <div className="text-center bg-[#535456] text-white">
            User: {userid}
        </div>
     );
}

export default User;