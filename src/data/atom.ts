import { atom } from 'recoil';

export interface AuthUser {
    id: string;
    loggedIn: boolean;
}

export interface UserData {

    address: string;
    createdAt: string
    datOfJoining: string
    dateOfBirth: string
    dateOfLeaving: string
    designation: string
    empRole: string
    empType: string
    fullAddress: string
    fullName: string
    residence: string
    team: string
    updatedAt: string
    userId: string,
    username: string,
    companyID: string
}

export type LeadStatus = 'completed' | 'pending';

export interface LeadsData {
    contact_person: string,
    contact_number: string,
    market_niche: string,
    service: string,
    assigned_to: string,
    status: LeadStatus
}
export const authState = atom<AuthUser | null>({
    key: 'authState',
    default: null
});

export const userData = atom<UserData | null>({
    key: 'userData',
    default: null
});

export const allEmployees = atom<UserData[]>({
    key: 'allEmployees',
    default: []
});

export const AllLeads = atom<LeadsData[]>({
    key: "allLeads",
    default: []
})

export const SearchedUser = atom<UserData[]>({
    key: "searchedUser",
    default: []
})