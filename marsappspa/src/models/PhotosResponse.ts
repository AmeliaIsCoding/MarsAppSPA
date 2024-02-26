import { Camera } from "./Camera"

export interface PhotosResponse {
    photos: {
        id: number,
        sol: number,
        camera: {
            id: number,
            name: Camera,
            rover_id: number,
            full_name: string
        },
        img_src: string,
        earth_date: string,
        rover:{
        id: number,
        name: string,
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
    }}[]
}

export type TrimmedPhotosResponse = {
    photos: {
        id: number,
        sol: number,
        img_src: string,
        earth_date: string
    }[]
}