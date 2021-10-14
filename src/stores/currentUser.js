import { writable } from "svelte/store";

export const currentUser = writable({
    email_address: "",
    isAdmin: false
});