import { Button } from "../ui/button"

export const Menu = ({ title }: { title: string }) => {
    return (
        <div className="relative flex items-center outline p-3">
            <Button variant={"link"} className="cursor-pointer absolute left-10 text-xl text-chart-3">
                NacatamalOn
            </Button>
            <h1 className="mx-auto text-center">
                Welcome to WebGPU - {title}
            </h1>
        </div>
    );
}