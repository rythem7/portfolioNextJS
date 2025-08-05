const authSteps = [
    {
        "id": 1,
        "title": "User Fills Form",
        "description": "Email & password input on the client side.",
        "icon": "🧍‍♂️ ➕ 📝",
        "top": "200px"
    },
    {
        "id": 2,
        "title": "Form Validation (Client)",
        "description": "Inputs validated in browser (e.g., empty fields, valid email).",
        "icon": "✅",
        "top": "400px"
    },
    {
        "id": 3,
        "title": "Data Sent to Server",
        "description": "Data is sent to backend via POST request (e.g., /login or /signup).",
        "icon": "📤",
        "top": "600px"
    },
    {
        "id": 4,
        "title": "Server Validates Input",
        "description": "Backend re-validates the received data.",
        "icon": "🔍",
        "top": "800px"
    },
    {
        "id": 5,
        "title": "Password Check (Login) or Hash Password (Signup)",
        "description": "Compares password hash (login) or hashes new password (signup).",
        "icon": "🔐",
        "top": "1000px"
    },
    {
        "id": 6,
        "title": "Session Created / Token Issued",
        "description": "JWT or Session is generated and sent back.",
        "icon": "🎟️",
        "top": "1200px"
    },
    {
        "id": 7,
        "title": "Set Cookie / Store Token",
        "description": "Cookie is set (HttpOnly, Secure) or token is saved locally.",
        "icon": "🍪",
        "top": "1400px"
    },
    {
        "id": 8,
        "title": "Redirect to Dashboard / App",
        "description": "User is redirected, and auth state is updated in frontend.",
        "icon": "🏠",
        "top": "1600px"
    }
]
export default authSteps;
