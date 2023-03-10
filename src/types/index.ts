
export type Social = {
    icon: string,
    link: string
}
export type Info = {
    key: string,
    value: string
}
export type Languages = {
    name: string,
    degree: string,
    scores: number
}
export type Skills = {
    name: string,
    scores: number
}
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

export type Person = {
    quality: string,
    description: string,
    status: 0 | 1 | 2 | 3 | 4 | 5,
    name: string,
    job: string,
    profileImage: string
}

export type Course = {
    schoolName: string,
    studyDate: { start: Date, end: Date },
    degree: string,
    certificate: string,
    description: string
}
export type Work = {
    jobName: string,
    durationOfActivity: { start: Date, end: Date },
    runtimeType: string,
    company: string,
    description: string
}

export type Portfolio = {
    type: 'UI Design' | 'Web template' | 'Logo' | 'Branding'
    image: string,
    description: string,
    url: string
}

export type Blog = {
    img: string,
    title: string,
    description: string
}

export type ContactInfo = {
    icon: string,
    items: { key: string, value: string }[]
}