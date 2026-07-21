// Cursor
document.body.style.cursor = 'url("../icons/static/cursor.svg"), auto';

// Nav script
const navItems = [
    { id: "homeTab",        active: "../icons/static/pen_full.svg",      inactive: "../icons/static/pen_empty.svg"   },
    { id: "myLearnTab",     active: "../icons/static/grad_full.svg",     inactive: "../icons/static/grad_empty.svg" },
    { id: "testNotesTab",   active: "../icons/static/note_full.svg",     inactive: "../icons/static/note_empty.svg"  },
    { id: "favoritesTab",   active: "../icons/static/favorite_full.svg", inactive: "../icons/static/favorite_empty.svg"  },
    { id: "dashboardTab",   active: "../icons/static/chart_full.svg",    inactive: "../icons/static/chart_empty.svg" },
    { id: "aboutTab",       active: "../icons/static/circle_full.svg",   inactive: "../icons/static/circle_empty.svg"  },
    {id: "signoutTab",      active: "../icons/static/signout_full.svg", inactive: "../icons/static/signout_empty.svg"}
];

function navEffect(tab, active, inactive) {
    tab.addEventListener("mouseover", () => { tab.querySelector('img').src = active; });
    tab.addEventListener("mouseout",  () => { tab.querySelector('img').src = inactive; });
}

navItems.forEach(item => {
    const navId = document.getElementById(item.id);
    if(navId) navEffect(navId, item.active, item.inactive);
});