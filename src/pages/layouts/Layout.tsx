import { Menu } from "@/components/app/Menu";
import { Title } from "@/components/app/Title";
import { Outlet } from 'react-router'

export const Layout = () => {

    return (
        <div className="outline">
            <Title />
            <div className="app-content flex">

                <div className="left-container border-r-2">

                    <Menu />

                </div>
                <div className="right-container">

                    <Outlet />
                </div>
            </div>
        </div>
    );
}
