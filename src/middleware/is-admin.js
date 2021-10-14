import {currentUser} from "../stores/currentUser";
import router from "page";

export default function(ctx, next) {
    let user;

    const unsubscribe = currentUser.subscribe(u => {
        user = u;
    })

    if (user && user.isAdmin) {
        unsubscribe();
        next();
    } else {
        router.redirect('/');
    }
}