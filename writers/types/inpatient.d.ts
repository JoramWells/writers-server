import { AppointmentInterface } from "./appointments"
import { AdmissionInterface, PatientInterface } from "./patients"
import { UserInterface } from "./user"

export interface InpatientTreatmentChartInterface{
    inpatient_treatment_chart_id: number
    Appointment?: AppointmentInterface & {
        Patient?: PatientInterface
    }
    appointment_id: number
    admission_id: number
    patient_id: number
    drug: string
    dose: string
    route: string
    frq: string
    extra_details: string
    hospital_id: string
    user_id: string
    User?: UserInterface
    date_of_treatment: string
    duration: string
    nurse_id: string
    Patient?: PatientInterface
    time_of_treatment: string
}

export interface InpatientPhysiotherapistVisitsInterface{
    inpatient_physiotherapist_visit_id: number
    appointment_id: number
    Appointment?: AppointmentInterface & {
        Patient?: PatientInterface
    }
    admission_id: number
    Admission?: AdmissionInterface & {
        Patient?: PatientInterface
    }
    patient_id: number
    Patient?: PatientInterface;
    physiotherapist_id: number
    date_of_visit: string | Date
    time_of_visit: string
    cost_of_visit: number
    physiotherapist_notes: string
    hospital_id: string
    user_id: string
    User?: UserInterface
    payment_status: string

}

export interface InpatientNurseVisitsInterface{
    inpatient_nurse_visit_id: number
    appointment_id: number
    Appointment?: AppointmentInterface & {
        Patient?: PatientInterface
    }
    admission_id: number
    Admission?: AdmissionInterface & {
        Patient?: PatientInterface
    }
    patient_id: number
    Patient?: PatientInterface;
    nurse_id: number
    date_of_visit: string | Date
    time_of_visit: string
    cost_of_visit: number
    nurse_notes: string
    User?: UserInterface
}

export interface InpatientDoctorVisitsDoctorInterface{
    inpatient_doctor_visit_id: number
    appointment_id: number
    Appointment?: AppointmentInterface & {
    Patient?: PatientInterface
    }
    admission_id: number
    Admission?: AdmissionInterface & {
        Patient?: PatientInterface
    }
    patient_id: number
    Patient?: PatientInterface;
    doctor_id: number
    date_of_visit: string | Date
    time_of_visit: string
    cost_of_visit: number
    doctor_notes: string
    User?: UserInterface
}

export interface InpatientCaseTypeInterface{
    inpatient_case_type_id: number
    inpatient_case_type_description: string
}