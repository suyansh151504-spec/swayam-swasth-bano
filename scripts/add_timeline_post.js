const db = firebase.firestore();

function addTimelinePost(postBy, content) {
    const postData = {
        post_by: postBy,
        content: content,
        image_path: "", 
        comments: [], 
        likes: 0,
        creation_time: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection("timeline_details").add(postData)
    .then((docRef) => {
        alert("Post submitted!");
        location.reload(); 
    })
    .catch((error) => {
        alert("Error: " + error.code + " - " + error.message);
    });
}
