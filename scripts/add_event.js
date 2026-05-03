const db = firebase.firestore();

function addYogaEvent() {
    db.collection("yoga_events").add({
        event_name: "Barot Summer Shivir",
        location: "Barot Valley, Himachal Pradesh",
        start_date: "2026-05-29",
        end_date: "2026-06-05",
        event_state: "upcoming"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Event added successfully!");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Error: " + error.message);
    });
}
