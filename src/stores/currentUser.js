import { writable } from "svelte/store";

export const currentUser = writable({
    id: undefined,
    email_address: "",
    isAdmin: false
});