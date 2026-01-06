import TicketCard from "../../components/TicketCard";
import type { Ticket } from "../../types/ticket";

interface TicketListProps {
    tickets: Ticket[];
}

function TicketList({ tickets }: TicketListProps) {
    return (
        <div>
            <ul className="bg-gray-300 flex flex-col gap-4">
                {tickets.map((ticket: Ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} />
                ))}
            </ul>
        </div>
    );
}

export default TicketList;
