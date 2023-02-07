function check(str) {
    regexp = /^[A-Za-z0-9]$/;
    if (regexp.test(str)) {
        return true;
    } 
    return false;
}