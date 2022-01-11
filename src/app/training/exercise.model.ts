export interface Exercise {
    id: string;
    name: string;
    duration: number;
    calories: number;
    startDate?: Date;
    state?: 'completed' | 'cancelled' | null;
}