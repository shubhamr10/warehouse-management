let db;


export const initDB  = () => {
    // opening the database
    const DBOpenRequest = window.indexedDB.open("WareSync", 4);
    //Register two event handlers to act on the database being opened successfully, or not
    DBOpenRequest.onerror = (event) => {
        console.error("error while loading data!");
    }

    DBOpenRequest.onsuccess = event => {
        console.log("Success");

        db = DBOpenRequest.result;
    }

    // This event handles the event whereby a new version of the database needs to be created
    // either one has not created before, or a new version number has been submitted via the
    // window.indexedDB.open line above
    // it is only implemented in recent browsers
    DBOpenRequest.onupgradeneeded = (event) => {
        db = event.target.result;
        console.log("asdasdasd")
        db.onerror = e => {
            console.error("error while loading database!");
        }

        console.log(db);


    }
    return false;
}