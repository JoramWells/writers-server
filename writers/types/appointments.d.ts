import { ConsultationTypesGroupInterface } from "./consultation";
import { InsuranceInterface } from "./insurances";
import { PatientInterface } from "./patients";
import { UserInterface } from "./user";


export interface ReferralTypesInterface{
  referral_type_id: number;
  referral_type_description: string;

}

export interface AppointmentInterface {
  account_type_id: number;
  admission_status: string | null;
  appointment_time: string;
  appointment_id: string;
  appointment_date: string | Date;
  appointment_status: string
  charges: number;
  claim_number: string | null;
  clinic_id: null | string;
  company_id: string | null;
  consultation_group_id: string | null;
  consultation_type: string | null;
  consultation_type_sub_group_id: string | null;
  ConsultationTypeGroup?: ConsultationTypesGroupInterface
  doctor_id: string | null;
  hospital_id: string | null;
  Insurance?: InsuranceInterface;
  insurance_limit_type_id: string | null;
  invoice_no: string | null;
  maximum_billable_amount: string | null;
  muac_for_infants: string | null;
  nhif_applicability?: string | null;
  nhif_claim_number?: string | null;
  nhif_rebate_amount?: string | null;
  nhif_rebate_amount_of_applicable_days?: string | null;
  Patient?: PatientInterface;
  patient_id: string;
  temperature: string;
  pulse_rate: string;
  respiratory_rate: string;
  systolic: string;
  diastolic: string;
  weight: string;
  height: string;
  body_mass_index: string;
  temperature_2?: string;
  pulse_rate_2?: string;
  respiratory_rate_2?: string;
  systolic_2?: string;
  diastolic_2?: string;
  weight_2?: string;
  height_2?: string;
  body_mass_index?: string;
  sp02?: string;
  nhif_rebate_number_of_applicable_days?: string;
  weight_conclusion?: string;
  height_conclusion?: string;
  patient_monitoring_notes: string | null;
  patient_registration_charge: string | null;
  payment_status: string | null;
  reference_account_id: number;
  referral_type_id: string | null;
  vital_signs?: string | null;
  ReferralType?: ReferralTypesInterface;
  total_appointment_discount: string | null;
  User?: UserInterface | null;
}

export interface AppointmentDiagnosisInterface{
  appointment?: AppointmentInterface & {
    Patient?: PatientInterface
  }
  appointment_diagnosis: string
  appointment_id: string
  diagnosis_id: string
  diagnosis_for: string
}