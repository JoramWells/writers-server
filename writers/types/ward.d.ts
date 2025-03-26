export interface WardTypeInterface{
    ward_type_id: number
    ward_type_description: string
    hospital_id: number
}

export interface WardCategoryInterface{
    ward_category_id: number
    ward_category_description: string
}

export interface WardBedInterface{
    bed_id: number
    bed_number: string
    ward_id: number
    hospital_id: number
    occupied: string
}

export interface WardInterface{
    ward_id: number
    ward_description: string
    hospital_id: number
    admission_charge: number
    daily_rate: number
    ward_type_id: number
    WardType?: WardTypeInterface
    daily_rate_corporate: number
    daily_nursing_charges: number
    daily_nursing_charges_corporate: number
    admission_charge_corporate: number
    daily_rate_foreigner: number
    daily_nursing_charges_foreigner: number
    admission_charge_foreigner: number
    daily_doctor_charges: number
    daily_doctor_charges_corporate: number
    daily_doctor_charges_foreigner: number
    daily_doctor_charges_icu: number
    daily_doctor_charges_corporate_icu: number
    daily_doctor_charges_foreigner_icu: number
    ward_category_id: number
    WardCategory?: WardCategoryInterface
    daily_doctor_charges_insurance: number
}

