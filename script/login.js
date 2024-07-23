const $loginForm = document.getElementById("loginForm");
const $inputs = $loginForm.querySelectorAll(".inputLogin");

const handleUserLogin = async (e) => {
    e.preventDefault();

    const values = Array.from($inputs).map(input => input.value);

    const user = {
        username: values[0],
        password: values[1]
    }

    console.log('Login attempt with user:', user);

    try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error response data:', errorData);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log('Response data:', data);

        if (data.access_token) {
            localStorage.setItem("token", data.access_token);
            console.log('Token saved. Redirecting to main page.');
            location.replace(window.origin + '/index.html');
        } else {
            console.log('Login failed: No access token in response.', data);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
}

$loginForm.addEventListener("submit", handleUserLogin);
