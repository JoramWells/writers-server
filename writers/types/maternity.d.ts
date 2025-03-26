import { AppointmentInterface } from "./appointments";

export interface MaternityProfileInterface {
  address: string;
  anc_number: string;
  appointment_id: string;
  Appointment?: AppointmentInterface
  blood_transfusion: string | null;
  diabetes: string | null;
  drug_allergies: string | null;
  edd: Date | string | null;
  education: string | null;
  family_history_diabetes: string | null;
  family_history_hypertension: string | null;
  family_history_tuberculosis: string | null;
  family_history_twins: string | null;
  gravida: string | null;
  height: string | null;
  hypertension: string | null;
  lmp: Date | string | null;
  marital_status: string | null;
  maternity_profile_id: number | null;
  name_of_client: string | null;
  next_of_kin: string | null;
  next_of_kin_contacts: string | null;
  next_of_kin_relationship: string | null;
  occupation: string | null;
  parity: string | null;
  Patient?: PatientInterface;
  patient_id: string | null;
  surgical_operations_history: string | null;
  telephone: string | null;
  tuberculosis: string | null;
}

export interface AntenatalProfileInterface{
  blood_group: string | null
  hb: string | null
  hiv: string | null
  hiv_testing_done: string | null
  maternity_antenatal_profile_id: string
  MaternityProfile?: MaternityProfileInterface
  maternity_profile_id: string
  rhesus: string | null
  serology: string | null
  tb_screening: string | null
  urinalysis: string | null
}

export interface MaternityDeliveryInterface{
  maternity_delivery_id: number
  maternity_profile_id: string
  MaternityProfile?: MaternityProfileInterface
  duration_of_pregnancy: string
  mode_of_delivery: string
  date_of_delivery: string
  blood_loss: string
  condition_of_mother: string
  agpar_score_1_min: string
  agpar_score_5_min: string
  agpar_score_10_min: string
  rescuscitation_done: string
  oxytocin: string
  azt_single_dose: string
  vitamin_a: string
  nvp_single_dose: string
  vitamin_k: string
  teo: string
  place_of_delivery: string
  conducted_by: string
}

export interface MaternityVisitsInterface{
  maternity_visit_id: number
  maternity_profile_id: number
  MaternityProfile?: MaternityProfileInterface
  date_of_visit: string
  urine: string
  bp: string
  hb: string
  pallor: string
  maturity: string
  weight: string
  fundal_height: string
  presentation: string
  lie: string
  foetal_heart: string
  foetal_movt: string
  date_of_next_visit: string

}

export interface MaternityPostNatalExaminationInterface{
  maternity_post_natal_examination_id: number,
  maternity_profile_id: number,
  MaternityProfile?: MaternityProfileInterface
  date_of_visit_1: string,
  blood_pressure_1: string,
  temp_1: string,
  pulse_1: string,
  respiratory_rate_1: string,
  general_condition_1: string,
  breast_1: string,
  cs_scar_1: string,
  involution_of_uterus_1: string,
  condition_of_episiotomy_1: string,
  lochia_1: string,
  pelvic_exam_1: string,
  haemoglobin_1: string,
  mothers_hiv_status_1: string,
  mother_given_vitamin_a_1: string,
  mother_given_art_1: string,
  mother_on_haart_1: string,
  mother_prophylaxis_initiated_1: string,
  babys_condition_1: string,
  babys_temp_1: string,
  babys_breaths_per_minute_1: string,
  babys_feeding_method_1: string,
  babys_breastfeeding_positioning_1: string,
  umbilical_cord_1: string,
  babys_immunization_started_1: string,
  infant_given_art_1: string,
  infant_prophylaxis_initiated_1: string,
  // 
  blood_pressure_2: string,
  temp_2: string,
  pulse_2: string,
  respiratory_rate_2: string,
  general_condition_2: string,
  breast_2: string,
  cs_scar_2: string,
  involution_of_uterus_2: string,
  condition_of_episiotomy_2: string,
  lochia_2: string,
  pelvic_exam_2: string,
  haemoglobin_2: string,
  mothers_hiv_status_2: string,
  mother_given_vitamin_a_2: string,
  mother_given_art_2: string,
  mother_on_haart_2: string,
  mother_prophylaxis_initiated_2: string,
  babys_condition_2: string,
  babys_temp_2: string,
  babys_breaths_per_minute_2: string,
  babys_feeding_method_2: string,
  babys_breastfeeding_positioning_2: string,
  umbilical_cord_2: string,
  babys_immunization_started_2: string,
  infant_given_art_2: string,
  infant_prophylaxis_initiated_2: string,

  // 
  blood_pressure_3: string,
  temp_3: string,
  pulse_3: string,
  respiratory_rate_3: string,
  general_condition_3: string,
  breast_3: string,
  cs_scar_3: string,
  involution_of_uterus_3: string,
  condition_of_episiotomy_3: string,
  lochia_3: string,
  pelvic_exam_3: string,
  haemoglobin_3: string,
  mothers_hiv_status_3: string,
  mother_given_vitamin_a_3: string,
  mother_given_art_3: string,
  mother_on_haart_3: string,
  mother_prophylaxis_initiated_3: string,
  babys_condition_3: string,
  babys_temp_3: string,
  babys_breaths_per_minute_3: string,
  babys_feeding_method_3: string,
  babys_breastfeeding_positioning_3: string,
  umbilical_cord_3: string,
  babys_immunization_started_3: string,
  infant_given_art_3: string,
  infant_prophylaxis_initiated_3: string,

  // 
  blood_pressure_4: string,
  temp_4: string,
  pulse_4: string,
  respiratory_rate_4: string,
  general_condition_4: string,
  breast_4: string,
  cs_scar_4: string,
  involution_of_uterus_4: string,
  condition_of_episiotomy_4: string,
  lochia_4: string,
  pelvic_exam_4: string,
  haemoglobin_4: string,
  mothers_hiv_status_4: string,
  mother_given_vitamin_a_4: string,
  mother_given_art_4: string,
  mother_on_haart_4: string,
  mother_prophylaxis_initiated_4: string,
  babys_condition_4: string,
  babys_temp_4: string,
  babys_breaths_per_minute_4: string,
  babys_feeding_method_4: string,
  babys_breastfeeding_positioning_4: string,
  umbilical_cord_4: string,
  babys_immunization_started_4: string,
  infant_given_art_4: string,
  infant_prophylaxis_initiated_4: string,
}

export interface MaternityPhysicalExaminationInterface{
  maternity_physical_examination_id: number,
  maternity_profile_id: number,
  MaternityProfile?: MaternityProfileInterface
  general:string,
  bp:string,
  height:string,
  cvs:string,
  resp:string,
  breasts:string,
  abdomen:string,
  vaginal_examination:string,
  genital_ulcers:string,
}