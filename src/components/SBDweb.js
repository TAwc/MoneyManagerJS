//import React, { useState, useEffect } from 'react';
import React, {useEffect } from 'react';
import $ from 'jquery';

const SbdLogin = () => {
    //const [web, cost] = useState([]);

    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        $.ajax({
            url: proxyurl + 'https://secure.myvirtualbranch.com/SBDOnline/SignIn.aspx',
            type: 'GET',
            headers: {'Access-Control-Allow-Origin': '*'},
            dataType: 'html',
            success: function(data,textStatus,xhr){
                console.log(data)
            },
            error: function(xhr,textStatus,errorThrown){
                console.log(errorThrown);
            },
        });
      });


    return (
        <div>
            <h1> HERE </h1>
            
        </div>
    );
}

export default SbdLogin;