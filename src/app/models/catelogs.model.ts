export interface Catelogs{
    id: number;
    name: string;
    subcategory?: Subcategory[];
}

export interface Subcategory{
    id: number;
    detail: string;
    display_name: string;
    requestEquipment?: RequestEquipment;
}

export interface RequestEquipment{
    display_name: string;
    results?: EquipmentDetails[];
    featured_photos?: [];
}

export interface EquipmentDetails {
    id: string;
    name: string;
    description: string;
    daily_rate: string;
    weekly_rate: string;
    operated_rates: string;
    monthly_rate: string;
}