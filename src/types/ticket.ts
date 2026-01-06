export type Ticket = {
    id: string;
    title: string;
    status: "open" | "in-progress" | "closed";
    priority: "high" | "medium" | "low";
    createdAt: string;
};
