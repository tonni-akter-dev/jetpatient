import { StaticImageData } from "next/image";

export interface DataInterface {
    id: number;
    image: StaticImageData;
    name: string;
    rating: number;
    services: string;
    discount: string;
}

export interface ClinicLocation {
    country: string;
    country_short: string;
    city: string;
}

export interface Clinic {
    clinic_name: string;
    clinic_one_liner: string;
    clinic_texts: string[];
    clinic_image: string;
    clinic_location: ClinicLocation;
    clinic_tags: string[];
    clinic_certifications: string[];
    price: string;
    availability: string;
    cancelation_text: string[];
}

