import { TypewriterEffectSmooth } from "./typewriter-effect";
export function Slogan() {
    const words = [
        {
            text: "Build",
        },
        {
            text: "awesome",
        },
        {
            text: "apps",
        },
        {
            text: "with",
        },
        {
            text: "Bargedesk.",
            className: "text-primary",
        },
    ];
    return (
        <div className="py-32 flex flex-col items-center justify-center bg-gray-100">
            <div className="text-center max-w-xl mx-auto">
                <h6 className="font-normal uppercase mb-2">Ready For <span className="font-semibold">The Future</span></h6>
            </div>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border  border-transparent text-white text-sm">
                    Request Demo
                </button>

            </div>
        </div>
    );
}
