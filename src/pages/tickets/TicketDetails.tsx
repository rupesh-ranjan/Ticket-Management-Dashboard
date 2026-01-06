import { useLoaderData } from "react-router";

function TicketDetails() {
    const data = useLoaderData();
    console.log("first", data);
    return <div>TicketDetails</div>;
}

export default TicketDetails;
