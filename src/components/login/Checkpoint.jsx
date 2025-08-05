// components/Checkpoint.jsx

export default function Checkpoint({ title, description, top }) {
    return (
        <div
            className="absolute left-1/8 lg:left-[50%] w-[250px] bg-accent/60 text-neutral-100 p-4 z-21 rounded-xl shadow-lg opacity-0  checkpoint"
            style={{ top }}
        >
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    );
}
