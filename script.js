// Define user data (in a real application, this should be on a server)
const users = {
    'jolie': {
        name: 'Jolie',
        message: `My dearest Jolie (UNEN UG HATUU) am better chef 😘`
    },
    'Jolie': {
        name: 'Jolie',
        message: `My dearest Jolie (UNEN UG HATUU) am better chef 😘`
    }
};

// Add event listener for Enter key
document.getElementById('username').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkLogin();
    }
});

function checkLogin() {
    const username = document.getElementById('username').value;
    
    if (users[username]) {
        // Hide login container
        document.querySelector('.login-container').style.display = 'none';
        
        // Show content
        const content = document.getElementById('content');
        content.style.display = 'block';
        
        // Update welcome message
        document.getElementById('welcomeMessage').textContent = 
            `Welcome, ${users[username].name}!`;
        
        // Show personal content
        const personalContent = document.getElementById('personalContent');
        personalContent.innerHTML = `
            <p>${users[username].message}</p>
        `;
    } else {
        alert('Name not found');
    }
}
