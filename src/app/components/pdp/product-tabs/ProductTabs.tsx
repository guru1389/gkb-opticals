"use client";

import { useState } from "react";
import { tabs } from "./tabData";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="mt-16">

      {/* Tab Navigation */}

      <div
        className="
          border-b
          border-neutral-200
          flex
          justify-between
          sticky
          top-[120px]
          bg-[#f7f7f7]
          z-10
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative
              pb-6                           
              tracking-wide
              transition-all
              cursor-pointer              
              text-black
              font-medium             
              text-center
              w-full
              ${
                activeTab === tab.id
                  ? "text-xl font-semibold border-b-2 border-black w-full"
                  : "text-neutral-400"
              }
            `}
          >
            {tab.label}

            {activeTab === tab.id && (
              <span
                className="                
                  absolute
                  left-0
                  bottom-0
                  w-full
                  h-[2px]
                  bg-black
                  cursor-pointer                  
                "
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}

      <div className="py-3">

        {activeTab === "details" && (
          <div>

            <div className="border-neutral-200 pt-2" >

                <div className="flex items-center gap-3 mb-3 mt-6 pb-4" >

                    <span className="h-px w-8 bg-black/30" />

                    <span className="text-sm text-neutral-500 uppercase" >
                        Product Details
                    </span>

                </div>


                <h2 className="text-2xl font-medium mb-4" >
                    Mont Blanc MB0075O Frame
                </h2>

                <p className="text-neutral-600 pb-6" >
                    The Mont Blanc MB0075O Frame is a stylish and sophisticated eyewear option
                </p>

                <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-white via-white to-black/[0.02] p-6 md:p-8">

                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/10" >

                        <h3 className="text-lg font-medium" > Specifications </h3>

                        <span className="text-[11px] text-black/40">15</span>

                    </div>

                    <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5" >

                        <div className="flex flex-col gap-1 border-b border-black/10 pb-6 py-6" >

                            <dt className="text-sm text-neutral-500" > Brand </dt>

                            <dd className="text-sm text-neutral-900 font-medium" > PAUL VOSHERONT </dd>

                        </div>

                        <div className="flex flex-col gap-1 border-b border-black/10 pb-6 py-6" >

                            <dt className="text-sm text-neutral-500" > Frame Color Primary </dt>

                            <dd className="text-sm text-neutral-900 font-medium" > Gold </dd>

                        </div>

                        <div className="flex flex-col gap-1 border-b border-black/10 pb-6 py-6" >

                            <dt className="text-sm text-neutral-500" > Frame Color Secondary </dt>

                            <dd className="text-sm text-neutral-900 font-medium" > Gold </dd>

                        </div>


                        <div className="flex flex-col gap-1 border-b border-black/10 pb-6 py-6" >

                            <dt className="text-sm text-neutral-500" > Frame Shape </dt>

                            <dd className="text-sm text-neutral-900 font-medium" > Rectangle </dd>

                        </div>


                        <div className="flex flex-col gap-1 border-b border-black/10 pb-6 py-6" >

                            <dt className="text-sm text-neutral-500" > Frame Size </dt>

                            <dd className="text-sm text-neutral-900 font-medium" > 55 </dd>

                        </div>


                        <div className="flex flex-col gap-1 border-b border-black/10 pb-6 py-6" >

                            <dt className="text-sm text-neutral-500" > Frame Type </dt>

                            <dd className="text-sm text-neutral-900 font-medium" > Full </dd>

                        </div>

                        <div className="flex flex-col gap-1 border-b border-black/10 pb-6 py-6" >

                            <dt className="text-sm text-neutral-500" > Frame Vertical Height </dt>

                            <dd className="text-sm text-neutral-900 font-medium" > 27.000000 </dd>

                        </div>

                        <div className="flex flex-col gap-1 border-b border-black/10 pb-6 py-6" >

                            <dt className="text-sm text-neutral-500" > Lens Color </dt>

                            <dd className="text-sm text-neutral-900 font-medium" > Brown Gradient </dd>

                        </div>

                        <div className="flex flex-col gap-1 border-b border-black/10 pb-6 py-6" >

                            <dt className="text-sm text-neutral-500" > Lens Material </dt>

                            <dd className="text-sm text-neutral-900 font-medium" > Plastic </dd>

                        </div>

                    </dl>


                </div>


            </div>


           
          </div>

        )}

        {activeTab === "shipping" && (
          <div>            

            <div className="border-neutral-200 my-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 my-8 mb-8 py-8 pb-8" >

                    <div className="flex flex-col items-left gap-3 mb-3">

                        <span className="h-px w-8 bg-black/30" />
                        <h3 className="text-lg font-medium md:text-2xl font-light leading-snug text-black mb-1 text-left" >
                            Free Shipping
                        </h3>

                        <ul className="list-disc list-inside space-y-2 pl-5 text-black/70" >

                            <li className="text-neutral-600 leading-relaxed mb-2 pb-2">
                                We offer free standard shipping on all orders within India.
                            </li>
                            
                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                Orders are typically delivered within 5-7 business days.
                            </li>
                            
                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                Orders are typically delivered within 5-7 business days.
                            </li>

                        </ul>

                    </div>

                    <div className="flex flex-col items-left gap-3 mb-3">

                        <span className="h-px w-8 bg-black/30" />

                        <h3 className="text-lg font-medium md:text-2xl font-light leading-snug text-black mb-1 text-left" >
                            Easy Returns
                        </h3>

                        <ul className="list-disc list-inside space-y-2 pl-5 text-black/70" >

                            <li className="text-neutral-600 leading-relaxed mb-2 pb-2">
                                We accept returns within 30 days of delivery.
                            </li>
                            
                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                Items must be in original condition with tags attached.
                            </li>
                            
                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                To initiate a return, please contact our customer support team.
                            </li>

                        </ul>   

                    </div>

                </div>

            </div>
			
	    </div>
          

        )}

        {activeTab === "prescription" && (
          <div>
            
            <div className="border-neutral-200 pt-3 mb-8" >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 my-8 mb-8 py-8 pb-8" >

                    <div className="flex flex-col items-left gap-3 mb-3" >                        

                        <h2 className="text-2xl font-medium mb-4" >
                            How to take care of your glasses?
                        </h2>


                        <ul className="list-disc list-inside space-y-2 pl-5 text-black/70" >

                            <li className="text-neutral-600 leading-relaxed mb-2 pb-2">
                                Rinse: Use lukewarm water to remove dust and debris.
                            </li>
                            
                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                               Clean: Apply a small amount of lens cleaning solution or a drop of mild, lotion-free dish soap to both sides of the lenses.
                            </li>
                            
                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                Avoid harsh detergents.
                            </li>

                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                Rub: Gently rub the lenses and frame (including nose pads) for several seconds.
                            </li>

                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                Rinse Again: Ensure all soap is removed.
                            </li>
                            
                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                Dry: Use a clean, lint-free microfiber cloth.
                            </li>
                        </ul>

                    </div>

                    <div className="flex flex-col items-left gap-3 mb-3">


                        <h2 className="text-2xl font-medium mb-4" >
                            Key precautions you should take
                        </h2>

                        <ul className="list-disc list-inside space-y-2 pl-5 text-black/70">

                            <li className="text-neutral-600 leading-relaxed mb-2 pb-2">
                                Avoid Clothing: Never use shirts, paper towels, or tissues to wipe lenses, as they can cause micro-scratches.
                            </li>
                            
                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                Mind the Temperature: Avoid leaving glasses in extreme heat (like a car dashboard).
                            </li>
                            
                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                Use Two Hands: Putting on and taking off glasses with both hands prevents misalignment.
                            </li>                               

                            <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                Safe Storage: Keep glasses in a hard case when not in use.
                            </li>

                             <li className="text-neutral-600 text-sm mb-2 leading-relaxed pb-2" >
                                Placement: Always place glasses down on their temples (arms) with the lenses facing up to prevent scratching.
                            </li>  

                        </ul>


                    </div>

                </div>

               

            </div>



          </div>
        )}

        {activeTab === "warranty" && (
          <div>
            
                <div className="border-neutral-200 pt-3 mb-8" >

                    <div className="flex items-center gap-3 mb-3 mt-6 pb-4" >

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 my-2 mb-8 py-2 pb-8" >
            
                        <div className="flex flex-col items-left gap-3 mb-3" >  

                            <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">01</span>

                            <h3 className="text-lg font-medium md:text-2xl font-light leading-snug text-black mb-1 text-left" >
                                Warranties
                            </h3>
                            
                            <p className="text-neutral-600 leading-relaxed mb-2 pb-2" >
                                Your purchase (frame/ sunglass) is warranted against manufacturing defects as per manufacturer&apos;s norms for a period of one year from the date of purchase. The purpose/object/usage of the product purchased by you, is solely at your discretion and the Company shall not be liable in any manner whatsoever, unless there is a manufacturing defect therein. There will no warranty on the scratches of spectacle lenses.
                            </p>


                        </div>

                        <div className="flex flex-col items-left gap-3 mb-3" >

                            <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">02</span>

                            <h3 className="text-lg font-medium md:text-2xl font-light leading-snug text-black mb-1 text-left" >
                                Authenticity
                            </h3>

                            <p className="text-neutral-600 leading-relaxed mb-2 pb-2" >
                               In case of Frame/power Sunglass exchange, customer will be responsible for paying additional lens cost (as applicable) on new Frame/Sunglass.
                            </p>


                        </div>

                    </div>      


                </div>


          </div>
        )}

      </div>

    </div>
  );
}
