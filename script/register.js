const $registerForm = document.getElementById("registerForm");
const $inputs = $registerForm.querySelectorAll(".registerInput");
const $button = $registerForm.querySelector("#button");

const handleUserRegister = async (e) => {
    e.preventDefault();

    const values = Array.from($inputs).map(input => input.value);

    const user = {
        email: values[0],
        username: values[1],
        password: values[2],
        name: {
            firstname: values[3],
            lastname: values[4]
        },
        address: {
            city: values[5],
            street: values[6],
            number: values[7],
            zipcode: values[8],
            geolocation: {
                lat: values[9],
                long: values[10]
            }
        },
        phone: values[11]
    }

    try {
        const response = await fetch("https://fakestoreapi.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        
        const data = await response.json();
        
        if (data.id) {
            location.replace(window.origin + "/pages/login.html");
        } else {
            console.log(data);
        }
    } catch (error) {
        console.error(error);
    }
}

$registerForm.addEventListener("submit", handleUserRegister);
