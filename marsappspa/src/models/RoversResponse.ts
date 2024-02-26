import { Camera } from "./Camera"
import { Rover } from "./Rover"

export interface RoversResponse {
    rovers: {
        id: number,
        name: Rover,
        landing_date: string,
        launch_date: string,
        status: string, 
        max_sol: number,
        max_date: string,
        total_photos: number,
        cameras: [
            {
                name: Camera,
                full_name: string
            }
        ]
    }[]
}