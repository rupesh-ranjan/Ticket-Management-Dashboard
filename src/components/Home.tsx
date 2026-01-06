import TicketList from "../pages/tickets/TicketList";
import type { Ticket } from "../types/ticket";
// import TicketCard from "./TicketCard";

interface HomeProps {
    tickets: Ticket[];
}

function Home({ tickets }: HomeProps) {
    console.log("first", tickets);
    return <TicketList tickets={tickets} />;
}

export default Home;
