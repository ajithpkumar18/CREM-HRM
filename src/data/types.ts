export type LeadStatus = "Pending" | "In Progress" | "Completed" | "Closed";

export type Lead = {
    _id: string;
    contact_person: string;
    contact_number: string;
    market_niche: string;
    service: string;
    assigned_to: string;
    status: LeadStatus;
};

export type LeadsProps = {
    headings: string[];
    leads: Lead[];
    onLeadsUpdated?: () => void;
};