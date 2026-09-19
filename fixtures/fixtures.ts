import{test as base} from '@playwright/test'
//import the classes then create the custom fixture for the class so we can access the class
import { Basepage} from '../Pages/Basepage.js'
import { Loginpage } from '../Pages/Loginpage.js'
import { Productpage } from '../Pages/Productpage.js'
import { Checkout } from '../Pages/checkoutpage.js'
import { Cartpage } from '../Pages/cartPage.js'


type myfixture={
    Loginpage:Loginpage,
    productpage:Productpage,
    cartpage:Cartpage,
    checkout:Checkout
}

export const test = base.extend<myfixture>({
    Loginpage: async ({page}, use)=>{
        await use (new Loginpage(page))
    },
    productpage:async({page},use)=>{
        await use(new Productpage(page))
    },
    cartpage:async({page},use)=>{
        await use (new Cartpage(page))
    },
    checkout:async({page}, use)=>{
        await use (new Checkout(page))
    }

})