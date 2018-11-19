export const FETCH_DATA = 'fetch_data';

// default function to display redux action format
export function defaultFunction() {
    // action object format being return to a reducer
    return {
        type: FETCH_DATA,
        payload: null
    };
}

export function setPage(scrollTop) {
    let p = window.location.hash.replace('#','');
    if(p === '/'){
        p = 'home';
    } else {
        p = p.replace('/','');
    }
    // Scroll to top, function is only used on navigate so no conditions.
    window.scrollTo(0, 0);
    return {
        type: "SET_PAGE",
        payload: p
    };
}

export function setTheme(t) {

    let n = t === 'dark' ? 'light' : 'dark';

    // Let's try to remember the choice for future visits.
    // Detect and use localStoreage if available.
    function storageAvailable(type) {
        try {
            let storage = window[type],
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            return false;
        }
    }
    if (storageAvailable('localStorage')) {
        localStorage.setItem('theme',n);
    } else {
        console.warn('No localStorage');
    }

    return {
        type: "SET_THEME",
        payload: n
    };
}