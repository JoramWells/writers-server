export interface AppModuleInterface{
    id: string,
    title: string,
    description: string,
    link: string,
    img: string,
    isActive: boolean,
    hospitalID: string,  
    createdAt: string | Date,  
    updatedAt: string | Date,  
}