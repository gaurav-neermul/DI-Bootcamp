(function(username) {

    const userDiv = document.getElementById("user-info");

    userDiv.innerHTML = `
        <img 
            src="https://i.pravatar.cc/40" 
            class="rounded-circle me-2"
        >
        <span>${username}</span>
    `;

})("Gaurav_wb");