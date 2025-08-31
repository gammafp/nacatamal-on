import { useNavigate } from "react-router";
import { Button } from "../ui/button"

export const Title = () => {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/");
    }

    return (
        <div className="relative flex justify-center outline p-1">
            <Button onClick={handleNavigation} variant={"link"} className="cursor-pointer text-xl text-chart-3">
                NacatamalOn
            </Button>
        </div>
    );
}