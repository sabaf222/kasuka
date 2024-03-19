import { element } from "prop-types"

import Home from "./Home"

import Company from "./aboutCompany/company"
import Services from "./services/Services"
import ConnectUs from "./conectUs/ConnectUS"
import Members from "./members/Members"
import Portfolio from "./portfolio/portfolio"

let routes=[
   {path:'/',element:<Home/>},
   {path:'/about' ,element:<Company/>},
   {path:'/services',element:<Services/>},
   {path:'/sample' ,element:<Portfolio/>},
   {path:'/team' ,element:<Members/>},
   {path:'/contact' ,element:<ConnectUs/>},


]
export default routes