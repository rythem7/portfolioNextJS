// components/Checkpoint.jsx

export default function Checkpoint({ title, description, top }) {
    return (
        <div
            className="absolute left-1/6 lg:left-[50%] w-[250px] bg-accent/60 brightness-90 text-neutral-100 p-4 z-21 rounded-box drop-shadow-sm drop-shadow-accent/30 opacity-0  checkpoint"
            style={{ top }}
        >
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    );
}
