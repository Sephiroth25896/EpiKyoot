function decodeCookie(cookieString = "") {
    const cookies = cookieString.split(';');
    let cookie = {};
    cookies.forEach(function (item) {
        const crumbs = item.split('=');
        if (crumbs.length > 1) cookie[crumbs[0].trim()] = crumbs[1].trim();
    });
    return cookie;
}

const MyCookie = {
    decodeCookie,
};

export default MyCookie;