import React, { ComponentProps, ReactComponentElement } from "react";
import { Navigator } from "react-router-dom";

const params : any = {
  client_id: "951767523422-9216likuajckrd4i84rdfqt85vv610qq.apps.googleusercontent.com",
  redirect_uri: "http://localhost:3000",
  response_type: 'token',
  scope: 'https://www.googleapis.com/auth/youtube',
}  

const oauth2QueryString = new URLSearchParams(params).toString();
const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth'

export function GoogleOauth2Link({ children } : { children : React.ReactNode }): JSX.Element {
  return (
    <a href={`${oauth2Endpoint}?${oauth2QueryString}`}> 
      { children }
    </a>
  )
  
}



// function oauthSignIn() {
//   // Google's OAuth 2.0 endpoint for requesting an access token
//   var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

//   // Create <form> element to submit parameters to OAuth 2.0 endpoint.
//   var form = document.createElement('form');
//   form.setAttribute('method', 'GET'); // Send as a GET request.
//   form.setAttribute('action', oauth2Endpoint);

//   // Parameters to pass to OAuth 2.0 endpoint.
//   var params = {'client_id': '951767523422-9216likuajckrd4i84rdfqt85vv610qq.apps.googleusercontent.com',
//                 'redirect_uri': 'http://localhost:3000',
//                 'response_type': 'token',
//                 'scope': 'https://www.googleapis.com/auth/youtube',
//                 'include_granted_scopes': 'true',
//                 'state': 'pass-through value'};

//   // Add form parameters as hidden input values.
//   for (var p in params) {
//     var input = document.createElement('input');
//     input.setAttribute('type', 'hidden');
//     input.setAttribute('name', p);
//     input.setAttribute('value', params[p]);
//     form.appendChild(input);
//   }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
//   document.body.appendChild(form);
//   form.submit();
// }