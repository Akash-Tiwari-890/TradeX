import React, { useState, useEffect } from 'react';

import { render, screen } from "@testing-library/react"; // 1. Render & Screen come from here
import "@testing-library/jest-dom"; // 2. Load DOM matchers like toBeInTheDocument()
import Hero

from '../landing_Page/home/Hero';



//Test Suit


describe('Hero Component' , ()=>{
    test('render hero image' , ()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src" , "media/images/homeHero.png" )
    });
});

