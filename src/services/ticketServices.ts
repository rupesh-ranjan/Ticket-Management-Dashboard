import type { Ticket } from "../types/ticket";
import tickets from "../data/tickets.json";

export async function getAllTickets(): Promise<Ticket[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const data = tickets as Ticket[];
                resolve(data);
            } catch (error) {
                reject(error);
            }
        }, 500);
    });
}

export async function getTicketById(id: string): Promise<Ticket> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = tickets as Ticket[];
            const ticket = data.find((d) => d.id === id);
            if (!ticket) {
                reject("no ticket found");
            } else resolve(ticket);
        }, 500);
    });
}
