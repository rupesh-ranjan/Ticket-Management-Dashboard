import { Outlet, useLoaderData } from "react-router";
import Header from "../../components/Header";
import Home from "../../components/Home";
// import Navigation from "../../components/Navigation";

function RootLayout() {
    const tickets = useLoaderData();
    return (
        <div>
            {/* App shell */}
            {/* Header */}
            <Header />
            {/* Navigation */}
            <Home tickets={tickets} />
            {/* <Navigation /> */}
            <Outlet />
        </div>
    );
}

export default RootLayout;
