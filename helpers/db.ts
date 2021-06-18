import { db } from '../config/constants';

export function GetEvents(uid: string) {
    return db.collection('events').where('ownerId','==',uid).get();
}
export function GetEquipments(uid: string) {
    return db.collection('equipments').where('ownerId','==',uid).get();
}
export function GetPeople(uid: string) {
    return db.collection('people').where('ownerId','==',uid).get();
}
export function UpdateEvents(id:string) {
    return db.collection('events').doc(id)
}
export function UpdateEquipments(id:string) {
    return db.collection('equipments').doc(id)
}
export function UpdatePeople(id:string) {
    return db.collection('people').doc(id)
}