import type { Ticket } from "../types/ticket";

interface TickCardProps {
    ticket: Ticket;
}

function TicketCard({ ticket }: TickCardProps) {
    return (
        <li>
            <p>{ticket.title}</p>
            <div className="flex gap-4">
                <p>Status: {ticket.status}</p>
                <p>Priority: {ticket.priority}</p>
                <p>
                    Create At:
                    {new Date(ticket.createdAt).toLocaleDateString("en-in", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </p>
            </div>
        </li>
    );
}

export default TicketCard;
