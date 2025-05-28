import { atom } from 'recoil';

export const loggedin = atom({
    key: 'loggedin',
    default: false
});

export const userData = atom({
    key: 'userData',
    default: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        department: '',
        profilePicture: ''
    },
    effects: [
        ({ onSet }) => {
            onSet((newValue) => {
                localStorage.setItem('userData', JSON.stringify(newValue));
            });
        },
    ],
});