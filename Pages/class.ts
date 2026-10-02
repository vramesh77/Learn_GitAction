import { Page, test } from "@playwright/test"
import { PageOptions } from '../utils/interface.js'

export class typecheck implements PageOptions {
    page: Page
    base_URL: string
    timeout?: number | undefined

    constructor(options:PageOptions) {
        this.page = options.page;
        this.base_URL = options.base_URL;

    }

}