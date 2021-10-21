import { writable } from "svelte/store";

export const currentUser = writable({
    id: "",
    username: "",
    email_address: "",
    isAdmin: false
});