interface InventoryStatus {
    label: string;
    value: string;
}
export interface Activity {
    id?: string;
    code?: string;
    name?: string;
    duration?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: InventoryStatus;
    category?: string;
    image?: string;
    rating?: number;
}

