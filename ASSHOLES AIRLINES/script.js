function calculate() {
    let route = parseInt(document.getElementById("route").value);
    let seat = parseInt(document.getElementById("seat").value);
    let qty = parseInt(document.getElementById("qty").value);
    let type = document.getElementById("ptype").value;

    let baseFare = route + seat;
    let total = baseFare * qty;

    if (type === "student" || type === "senior" || type === "pwd") {
        total = total * 0.90; // 10% discount
    }

    if (type === "child") {
        total = 0; // Free
    }

    document.getElementById("result").innerText =
        "Total Fare: ₱" + total.toFixed(2);
}

function signup() {
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    localStorage.setItem("email", document.getElementById("email").value);

    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("pname")) {
        document.getElementById("pname").innerText = localStorage.getItem("name");
        document.getElementById("pphone").innerText = localStorage.getItem("phone");
        document.getElementById("pemail").innerText = localStorage.getItem("email");
    }
});

