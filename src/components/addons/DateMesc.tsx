export function getDayFromDate(dateString: string): string {
    const date = new Date(dateString); // Convert the string to a Date object
    return date.toLocaleDateString("en-IN", { weekday: "long" }); // Get the day name
}

export function getDateOnly(dateString: string): string {
    const date = new Date(dateString); // Convert the string to a Date object
    return date.toLocaleDateString("en-IN"); // Format the date (e.g., "02/10/2025")
}

export function getTimeOnly(dateString: string): string {
    const date = new Date(dateString); // Convert the string to a Date object
    const hours = date.getUTCHours().toString().padStart(2, "0"); // Get hours in UTC
    const minutes = date.getUTCMinutes().toString().padStart(2, "0"); // Get minutes in UTC
    return `${hours}:${minutes}`; // Return time in "HH:MM" format
}