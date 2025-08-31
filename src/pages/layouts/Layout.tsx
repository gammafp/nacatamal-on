import { Menu } from "@/components/app/Menu";
import { Title } from "@/components/app/Title";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Outlet } from 'react-router'

export const Layout = () => {

    return (
        <div className="outline">
            <Title />
            <div className="app-content flex">

                <ResizablePanelGroup direction="horizontal" className="flex h-[calc(100vh-4rem)] w-full">


                    <ResizablePanel defaultSize={20} className="left-container border-r-2">

                        <Menu />

                    </ResizablePanel>

                    <ResizableHandle withHandle />

                    <ResizablePanel defaultSize={80} className="right-container">

                        <Outlet />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
}
