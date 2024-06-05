import { Patient } from "./types";

export const fakeListings: Patient[] = [{
    id: '1',
    name: 'Strom Trooper',
    dateOfBrith: '1892-01-12',
    contactInfo: '123-896-7526',
    reasonForReferral: 'illness',
    referralStatus: 'in progress',
    createdAt: '2024-02-23',
    updatedAt: '2024-03-28'
}, {
    id: '2',
    name: 'Tony Stark',
    dateOfBrith: '1975-03-12',
    contactInfo: '555-364-9999',
    reasonForReferral: 'Killed old doc',
    referralStatus: 'complete',
    createdAt: '2023-01-23',
    updatedAt: '2024-04-15'
}, {
    id: '3',
    name: 'The Hulk',
    dateOfBrith: '1968-10-13',
    contactInfo: '789-965-2154',
    reasonForReferral: 'Gamma radiation exposure',
    referralStatus: 'in progress',
    createdAt: '2022-06-09',
    updatedAt: '2023-12-28'
}];

// export const fakeMyListings: Listing[] = [{
//     id: '789',
//     name: 'Bicycle',
//     description: 'Bright blue, very fast',
//     price: 75,
//     views:0
// }, {
//     id: '234',
//     name: 'Electric Guitar',
//     description: 'Needs new strings, but otherwise in very good condition',
//     price: 99,
//     views:0
// }, {
//     id: '987',
//     name: 'Playstation',
//     description: 'Old playstation, still works though',
//     price: 75,
//     views:0
// }];