// login-form.js

$(document).ready(function() {
    // Toggle between Login and Signup
    $(".login-page").click(function() {
        $(".hide-me").hide();
        $(".show-me").show();
        $(".login-heading").hide();
        $(".signup-button").show();
    });

    $(".forget-password").click(function() {
        alert("Password recovery feature is not implemented yet.");
    });

    // Handle Login
    $(".login-button").click(function() {
        const username = $(".input-1").val();
        const password = $(".input-2").val();
        const phoneNumber = $(".phone-number").val();

        // Basic validation
        if (username === "" || password === "" || phoneNumber === "") {
            alert("Please fill all fields for login.");
            return;
        }

        // Here, you can add an AJAX request to your server to authenticate
        console.log("Logging in:", username, password, phoneNumber);
        alert("Login feature is not implemented yet.");
    });

    // Handle Signup
    $(".signup-button").click(function() {
        const firstName = $(".first-name").val();
        const lastName = $(".last-name").val();
        const email = $(".email").val();
        const password = $(".password-signup").val();
        const confirmPassword = $(".confirm-password-signup").val();
        const phoneNumber = $(".phone-number-signup").val();

        // Basic validation
        if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || phoneNumber === "") {
            alert("Please fill all fields for signup.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Here, you can add an AJAX request to your server to register the user
        console.log("Signing up:", firstName, lastName, email, password, phoneNumber);
        alert("Signup feature is not implemented yet.");
    });
});
