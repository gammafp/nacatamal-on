import { Menu } from "@/components/app/Menu";
import { Outlet } from 'react-router'

export const Layout = () => {

    return (
        <div>
            <Menu title={"Space"} />
            <main>
                <Outlet  />
            </main>
        </div>
    );
}
