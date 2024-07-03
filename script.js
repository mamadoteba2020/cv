// Simulated user data (for demonstration purposes)
const userData = {
    username: "John Doe",
    email: "john.doe@example.com",
};

// Elements
const profileSection = document.querySelector(".profile");
const editProfileSection = document.querySelector(".edit-profile");
const editProfileForm = document.getElementById("profile-form");
const editProfileButton = document.getElementById("edit-profile");
const logoutButton = document.getElementById("logout");
const usernameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const newUsernameInput = document.getElementById("new-username");
const newEmailInput = document.getElementById("new-email");

// Initial profile data display
usernameElement.textContent = userData.username;
emailElement.textContent = userData.email;

// Edit profile button click event
editProfileButton.addEventListener("click", () => {
    profileSection.style.display = "none";
    editProfileSection.style.display = "block";
    newUsernameInput.value = userData.username;
    newEmailInput.value = userData.email;
});

// Save changes button click event
editProfileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUsername = newUsernameInput.value;
    const newEmail = newEmailInput.value;

    // Update profile data (simulated)
    userData.username = newUsername;
    userData.email = newEmail;

    // Update profile display
    usernameElement.textContent = newUsername;
    emailElement.textContent = newEmail;

    // Reset form and switch back to profile view
    editProfileForm.reset();
    editProfileSection.style.display = "none";
    profileSection.style.display = "flex";
});

// Logout button click event
logoutButton.addEventListener("click", () => {
    // Perform logout actions here (e.g., clearing user data, redirecting to login page)
    alert("Logged out successfully!");
});




