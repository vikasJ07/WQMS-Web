// apiKey: "",
//     authDomain: "",
//     databaseURL: "https://wqms-b457c-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "",
//     measurementId: ""
    // Firebase configuration (replace with your own Firebase config)
const firebaseConfig = {
    apiKey: "YAIzaSyAFIh7ycgcaamsFCE2SSoQu1ShOBVG7S5g",
    authDomain: "wqms-b457c.firebaseapp.com",
    projectId: "wqms-b457c",
    storageBucket: "wqms-b457c.appspot.com",
    messagingSenderId: "414402015863",
    appId: "Y1:414402015863:web:6596d7558c77aaf4448c72",
    measurementId: "YG-W10PGRFM5Q"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to get sensor data from Firestore
function getSensorData() {
    db.collection("sensor_data").doc("latest").onSnapshot((doc) => {
        if (doc.exists) {
            const data = doc.data();
            document.getElementById("temperature").textContent = data.temperature;
            document.getElementById("ec").textContent = data.ec;
        } else {
            console.log("No such document!");
        }
    });
}

// Call the function to get data
getSensorData();
