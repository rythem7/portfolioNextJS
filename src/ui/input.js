export default function Input({ type = "text", placeholder = "Enter text", className = "", required = false }) {
    return (
        <div className={`w-full max-w-[20rem] flex rounded-box shadow-inner items-center bg-base-300 ${className}`}>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-transparent rounded-box px-4 py-2 focus:outline-none text-base-content"
                required={required}
            />
            <button className="btn btn-accent text-accent-content rounded-box px-4 py-2 brightness-50 hover:brightness-75">
                Submit
            </button>
        </div>
    );
}