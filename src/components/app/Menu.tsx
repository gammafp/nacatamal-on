import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router";
 
export const Menu = () => {

    return (
        <Accordion
            type="single"
            collapsible
            className="w-full ps-2 border-b-1"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-ring">Start</AccordionTrigger>
                <AccordionContent className="flex flex-col ps-3 text-balance  ">

                    <Link to="/start/hello-webgpu" className="cursor-pointer hover:underline">
                        - Hello WebGPU
                    </Link>
                    <Link to="/pointes" className="cursor-pointer hover:underline">
                        - Pointes
                    </Link>
                    <Link to="/lines-and-strips" className="cursor-pointer hover:underline">
                        - Lines and Strips
                    </Link>
                    
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}