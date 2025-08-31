import { BaseCanvas } from "@/components/app/BaseCanvas";
import { Hello } from "@nacatamal-on";
import { useEffect } from "react";

export const HelloWebGPU = () => {

    useEffect(() => {
        Hello();
    }, [])

    return (
        <div className="content flex  flex-col">
            <div className="flex justify-center">
                <BaseCanvas />
            </div>
            <div className="text-center mt-3">
                <h1>Hello WebGPU</h1>
            </div>
        </div>
    );
};
