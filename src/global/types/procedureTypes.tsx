export type Procedure = {
    id: number;
    body_areas: string[];
    categories: string[];
    concerns_addressed: string[];
    clinics: number;
    destinations: number;
    procedure_type: string;
    days_to_travel: string;
    recovery_duration: string;
    procedure_duration: string;
    name: string;
    medical_name: string;
    description: string;
    average_cost: string;
    anesthesia_required: boolean;
    followup_required: boolean;
    image: string;
  };