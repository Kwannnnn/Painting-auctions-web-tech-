import router from "page";
import tokenStore from "../stores/token";
import jwt_decode from "jwt-decode";
import {currentUser} from "../stores/currentUser";

const getUserFromToken = (token) => {
    const {email_address, isAdmin, id} = jwt_decode(token);

    const user = {
        email_address: email_address,
        isAdmin: isAdmin,
        id: id
    }

    return user;
}


export default function (ctx, next) {
    let token;

    const unsubscribe = tokenStore.subscribe(tokenValue => {
        token = tokenValue;
    });

    if(token && token.token){
        const user = getUserFromToken(token);
        currentUser.set(user);
        unsubscribe();
        next();
    }else{
        router.redirect('/login');
    }
}