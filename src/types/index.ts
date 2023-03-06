import { defineStore } from 'pinia';
export type Router = {
    name: string,
    icon: string
}

export type Service = {
    icon: string,
    name: string,
    description: string
}
export type Services = {
    type: boolean,
    name: string
}
export type Price = {
    definition: string,
    price: number,
    description: string
    services: Services[]
}