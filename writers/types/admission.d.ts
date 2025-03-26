import { PatientInterface } from "./patients";
import { UserInterface } from "./user";
import { WardBedInterface, WardInterface } from "./ward";

export interface AdmissionTypeInterface{
    admission_type_id: number;
    admission_type_description: string;
  
  }
  
  export interface AdmissionBedBillingTypesInterface{
    bed_billing_type_id: number;
    bed_billing_type_description: string;
  
  }
  
  export interface AdmissionCategoryInterface{
    admission_category_id: number;
    admission_category_description: number;
  }
  
  export interface AdmissionInterface {
    AdmissionBedBillingType?: AdmissionBedBillingTypesInterface
    AdmissionCategory?: AdmissionCategoryInterface;
    admission_category_id: string;
    admission_charge: string | number;
    admission_date: string | Date;
    admission_id: string;
    admission_time: string;
    AdmissionType?: AdmissionTypeInterface
    admission_type_id: string | number;
    appointment_id: string;
    bed_billing_type_id: string;
    bed_id: string;
    bill_daily_doctor_ward_round_charges: string;
    clinical_summary?: string;
    daily_bed_rate: string;
    daily_bed_rate_number_of_days: string;
    daily_doctor_ward_round_rate: string
    daily_nursing_rate: string
    deposit_amount: string
    diagnosis: string
    discharge_date: string
    discharge_time: string
    discharge_type_id: string
    doctor_admitting: string
    doctor_id: string
    doctor_ward_rounds_no_of_days: string
    hospital_id: string
    hospital_inpatient_id: string
    inpatient_case_type_id: string
    maternity_package_amount: string
    maternity_package_service_type_id: string
    package_type: string
    Patient?: PatientInterface
    patient_id: string
    pay_status: number
    review_date: string
    User?: UserInterface
    Ward?: WardInterface
    WardBed?: WardBedInterface
    ward_id: string
  }