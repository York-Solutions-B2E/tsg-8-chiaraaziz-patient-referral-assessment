export interface Patient {
    id: string,
    name: string 
    dateOfBirth: string,
    contactInfo: string,
    referralReason: string,
    referralStatus: string,
    createdAt: Date,
    updatedAt: Date,
    noteText: string,
    notes: Note[]
}

export interface Note {
    id : string,
    noteText: string,
    createdDate: Date

}