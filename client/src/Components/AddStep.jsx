import React from 'react'

export default function AddStep() {
    return (
        <div>
            <div className="Ingredients  flex flex-col">
            <span>Step1/3</span>
            <div className="flex flex-row">
                    <img className="h-auto w-2/6" src="https://lh3.googleusercontent.com/proxy/NXC0ggDM_VA7lfjNGfguZvvkDtrr3qQoiTh74big1Bs8CvHV7faPjqjyrI7aPgDPcVz0jGeTHtm8kxpDRgVAgJGu1T-XtcOOuCZraIs4OMO4mv2zhQp5IEcNKclthceXqms6ig0" alt="add" />
                    
                    <div className="flex flex-col w-4/6">
                        <textarea className="h-full border border-gray-400 rounded-lg py-2 px-4 m-1 block w-full appearance-none" type="text" placeholder="Step Description"></textarea>
                        <input className="border  border-gray-400 rounded-lg py-2 px-4 m-1 block w-full appearance-none" type="text" placeholder="Image URL" />
                    </div>
            </div>
            
          </div>

          <div className="Ingredients  flex flex-col">
            <span>Step2/3</span>
            <div className="flex flex-row">
                    <img className="h-auto w-2/6" src="https://lh3.googleusercontent.com/proxy/NXC0ggDM_VA7lfjNGfguZvvkDtrr3qQoiTh74big1Bs8CvHV7faPjqjyrI7aPgDPcVz0jGeTHtm8kxpDRgVAgJGu1T-XtcOOuCZraIs4OMO4mv2zhQp5IEcNKclthceXqms6ig0" alt="add" />
                    
                    <div className="flex flex-col w-4/6">
                        <textarea className="h-full border border-gray-400 rounded-lg py-2 px-4 m-1 block w-full appearance-none" type="text" placeholder="Step Description"></textarea>
                        <input className="border  border-gray-400 rounded-lg py-2 px-4 m-1 block w-full appearance-none" type="text" placeholder="Image URL" />
                    </div>
            </div>
            
            </div>
            
            <div className="Ingredients  flex flex-col">
            <span>Step3/3</span>
            <div className="flex flex-row">
                    <img className="h-auto w-2/6" src="https://lh3.googleusercontent.com/proxy/NXC0ggDM_VA7lfjNGfguZvvkDtrr3qQoiTh74big1Bs8CvHV7faPjqjyrI7aPgDPcVz0jGeTHtm8kxpDRgVAgJGu1T-XtcOOuCZraIs4OMO4mv2zhQp5IEcNKclthceXqms6ig0" alt="add" />
                    
                    <div className="flex flex-col w-4/6">
                        <textarea className="h-full border border-gray-400 rounded-lg py-2 px-4 m-1 block w-full appearance-none" type="text" placeholder="Step Description"></textarea>
                        <input className="border  border-gray-400 rounded-lg py-2 px-4 m-1 block w-full appearance-none" type="text" placeholder="Image URL" />
                    </div>
            </div>
            
          </div>
        </div>
    )
}
