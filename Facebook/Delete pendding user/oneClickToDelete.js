var arrButtonDeletePenddingUser = [...document.querySelectorAll('[aria-label="Delete"]')];
arrButtonDeletePenddingUser.forEach(key=>{

    setTimeout(key.click(), 1000);

});
window.location.href="https://www.facebook.com/friends/requests";
