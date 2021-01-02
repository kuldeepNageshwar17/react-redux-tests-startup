/**
 * @jest-environment jsdom
 */


import React from "react"
import {shallow} from "enzyme"
import Header from "./index"

import {findByTestAttribute} from "../../../utils"

const setup=(props ={})=>{
    const component =shallow(<Header {...props}/>)
    return component;
}

describe("Header component", ()=>{


    let component;
    beforeEach(()=>{
        component=setup();
    });
    //find header class 
    it("should render without error",()=>{        
        expect(findByTestAttribute(component,"headerComponent").length).toBe(1)
    })  
    ///find logo in header
    it("should render a logo",()=>{
        expect(findByTestAttribute(component,"logoIMG").length).toBe(1)

    })  
    
}) 
