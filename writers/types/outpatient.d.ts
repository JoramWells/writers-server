import { AppointmentInterface } from "./appointments"
import { PatientInterface } from "./patients"

export interface OutPatientServicesChildHealthInformationInterface{
   out_patient_services_chi_id: number 
   appointment_id: number 
    appointment?: AppointmentInterface & {
    patient_detail?: PatientInterface
    }
   patient_id: number 
   patient_detail: PatientInterface;
   infant_has_kwashiorkor: string 
   infant_has_marasmus: string 
   infant_has_faltering_growth: string 
   infant_has_received_exclusive_breast_feeding: string 
   infant_has_been_dewormed: string 
   infant_has_disability: string 
}

export interface OutPatientServicesCervicalCancerScreeningInterface{
   out_patient_services_ccs_id: number 
   appointment_id: number 
    appointment?: AppointmentInterface & {
    patient_detail?: PatientInterface
    }
   patient_id: number 
   patient_detail: PatientInterface;
   patient_receiving_via_vili_hpv: string 
   patient_screened_for_pap_smear: string 
   patient_screened_for_hpv_test: string 
   infant_has_received_exclusive_breast_feeding: string 
   patient_with_positive_via_vili_result: string 
   patient_with_positive_cytology_result: string 
   patient_with_positive_hpv_result: string 
   patient_with_suspicious_cancer_lesions: string 
   patient_treated_using_cryotherapy: string 
   patient_treated_using_leep: string 
   patient_hiv_positive_while_being_screened: string 
}

export interface OutPatientPNCServicesInterface{
   out_patient_services_pnc_id: number 
   appointment_id: number 
    appointment?: AppointmentInterface & {
    patient_detail?: PatientInterface
    }
   patient_id: number 
   patient_detail: PatientInterface;
   breast_examination_done: string 
   patient_counselled: string 
   patient_has_fistula: string 
   pnc_given_exercise: string 
   cervical_cancer_patient: string 
   mother_received_post_partum_care: string 
   infant_received_post_partum_care: string 
}

export interface OutPatientANCServicesInterface{
   out_patient_services_pnc_id: number 
   appointment_id: number 
    appointment?: AppointmentInterface & {
    patient_detail?: PatientInterface
    }
   patient_id: number 
   patient_detail: PatientInterface;
   patient_given_ipt_first_dose: string 
   patient_given_ipt_second_dose: string 
   patient_with_hb_less_than_eleven_g_dl: string 
   llitns_distributed_to_under_one_year: string 
   llitns_distributed_to_anc_client: string 
   tested_for_syphilis: string 
   tested_positive_for_syphilis: string 
   counselled_on_infant_feeding_options: string 
   breast_examination_done_on_patient: string 
   patient_given_exercise: string 
   presenting_with_pregnancy: string 
   patient_issued_with_iron: string 
   patient_issued_with_folic: string 
   patient_issued_with_combined_ferrous_folate: string 
}