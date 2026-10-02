import {test,Page} from '@playwright/test'

export interface PageOptions{
    page:Page,
    base_URL:string,
    timeout?:number
}