import router from "page";
import tokenStore from "../stores/token";

export default function (ctx, next) {
    //check for a token or idk
    let token;
    if(token){
        return next;
    }else{
        router.redirect('/login');
    }
}