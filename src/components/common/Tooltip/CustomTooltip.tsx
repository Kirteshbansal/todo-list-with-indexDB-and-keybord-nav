import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import { ICustomTooltipProps } from "@/lib/types/ComponentsTypes";
import React from "react";

const CustomTooltip: React.FC<ICustomTooltipProps> = ({
    children,
    tooltipContent,
}) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent>
                    <p>{tooltipContent}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
export default CustomTooltip;
