export function getDayFromDate(dateString: string): string {
    const date = new Date(dateString); // Convert the string to a Date object
    return date.toLocaleDateString("en-IN", { weekday: "long" }); // Get the day name
}

export function getDateOnly(dateString: string): string {
    const date = new Date(dateString); // Convert the string to a Date object
    return date.toLocaleDateString("en-IN"); // Format the date (e.g., "02/10/2025")
}

export function getTimeOnly(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-IN")
}