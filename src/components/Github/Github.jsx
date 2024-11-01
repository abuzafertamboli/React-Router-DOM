import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/abuzafertamboli')
    //     .then((response) => response.json())
    //     .then((response) => {
    //         console.log(response);
    //         setData(response);
    //     })
    // }, [])
    return ( 
        <div className=" flex flex-col items-center gap-3 text-3xl m-4 p-4 bg-[#535456] text-white">
            <img src={data.avatar_url} alt="profile_picture" className="w-[300px] rounded-md" />
            <p>GitHub followers: {data.followers}</p>
        </div>
     );
}

export default Github;

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/abuzafertamboli');
    return response.json()
}