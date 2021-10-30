export const checkEmail = (email_address) => {
    return email_address.match('^([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9.-]*[A-Za-z0-9])+@([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9.-]*[A-Za-z0-9])+\.(com|nl)$') ? null : { checkEmail: true};
}
export const checkPassword = (password) => {
    return password.match('^(?=.*[0-9])(?=.*[A-Z]).{6,}$') ? null : { checkPassword: true};
}