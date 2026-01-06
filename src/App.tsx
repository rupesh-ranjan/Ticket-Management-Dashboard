import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import RootLayout from "./pages/root/RootLayout";
import { getAllTickets, getTicketById } from "./services/ticketServices";
import TicketDetails from "./pages/tickets/TicketDetails";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            loader: getAllTickets,
            hydrateFallbackElement: <>Loading</>,
            Component: RootLayout,
            children: [
                {
                    path: "tickets",
                    children: [
                        {
                            index: true,
                            loader: getAllTickets,
                            element: <RootLayout />,
                        },
                        {
                            path: ":ticketId",
                            loader: ({ params }) =>
                                getTicketById(params.ticketId!),
                            element: <TicketDetails />,
                        },
                        { path: "new", element: <>Create ticket</> },
                    ],
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
