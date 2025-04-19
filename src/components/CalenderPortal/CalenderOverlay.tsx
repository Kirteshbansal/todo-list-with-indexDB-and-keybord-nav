import { Calendar } from "@/components/shadcn/ui/calendar";
import { ICalenderOverlayProps } from "@/lib/types/ComponentsTypes";
import { createPortal } from "react-dom";

const CalenderOverlay = ({ date, setDate, className }: ICalenderOverlayProps) =>
    createPortal(
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className={className || ""}
        />,
        document.body,
    );

export default CalenderOverlay;
