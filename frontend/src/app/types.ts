export interface Patient {
    id: string,
    name: string 
    dateOfBirth: string | null |undefined,
    contactInfo: string | null |undefined,
    referralReason: string | null |undefined,
    referralStatus: string | null |undefined,
    createdAt: Date,
    updatedAt: Date | null |undefined

}