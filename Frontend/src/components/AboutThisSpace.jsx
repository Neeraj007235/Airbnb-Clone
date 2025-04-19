import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const AboutThisSpace = () => {
  const shortText = `
  La vida - The life.
  
  This 3 Acre, 10,000 sq ft modern Farmhouse is inspired from the Mega Mansions of Marbella, Spain.
  Overlooking a beautiful orchard, enjoy the magnificent pool, warm yourselves in the fire pit...
  `;


  const fullText = `
This 3 Acre, 10,000 sq ft modern Farmhouse is inspired from the Mega Mansions of Marbella, Spain.
Overlooking a beautiful orchard, enjoy the magnificent pool, warm yourselves in the fire pit next to it while relishing a delicious barbecue meal, you will be spoilt for choice..!
Stay & celebrate here the most joyous of occasions with your loved ones. You’ll not find a place more serene & luxurious…!!

THE SPACE
THE PRICE OF THE VILLA VARIES ACCORDING TO THE NUMBER OF GUESTS.
The rooms are allotted on double occupancy basis. For example 6 people will have 3 bedrooms.
An extra bedroom can be taken for an additional charge.

Located in Jallandhar city, a stone throw away from the National highway towards Amritsar & Pathankot, this is a perfect place to pamper yourself and your loved ones. This villa is best suited for families and friend groups looking to spend quality time together. It is important that your group maintain the peace and serenity of the neighbourhood.

PLEASE NOTE:
- We do not allow loud music or noise.
- In the event you wish to play music outdoors, at acceptable volumes, we suggest you do so during the day from 11.00 AM to 7.00 PM. After dark, music can be played indoors.
- This home has an inverter power & Genset backup. Normally we don't face power cuts. However, in the event of major supply problem for long, backup standby will be for approx 7–8 hours.
- We strongly condemn the illegal practice of prostitution and drugs. Any suspicion would be immediately reported to the local police. Our home is not ideal for stag bookings.

Villa La Vida is special because of its:
- Convenient location
- Located amidst lush green fields
- Modern luxurious interiors with ample space
- Luscious lawns
- Magnificent pool
- Cozy fire pit
- 2 acres of orchard within the villa
- In-house chef & care takers

We care for your absolute comfort! To that effect, we provide:
- Inverter, AC, heater, WiFi, smart-TV
- Wardrobe, hangers
- Iron, torch
- Geysers, towels, toiletries
- Medical kit, mosquito repellent
- Barbecue kit, bonfire
- Secured parking space for up to 10 cars

PRIVATE SPACES TO 'HANGOUT'
- 2 Drawing/living rooms with comfortable seating for eight to ten each
- Pool facing indoor party area with a top notch sound system
- Dining table with 8 chairs
- Two gardens
- One huge terrace facing pool

KITCHEN
- Fully equipped with crockery, cutlery, pots, pans, & glassware
- Darjeeling tea, green tea on the house
- Toaster, oven, microwave, mixer grinder, electric kettle, hob, chimney & refrigerator
- Water filter

BEDROOMS & BATHROOM
- Luxury bed linen and towels
- Bathroom amenities
- All attached bathrooms with 24x7 Hot Water (Geyser)

OTHER THINGS TO NOTE — HOUSE RULES
1. Our properties are ideal for a group of friends and family but not ideal for stags.
2. The number of guests should not exceed the count mentioned at time of booking, at any time during the stay.
3. ID's of all guests to be given at the time of arrival
4. Food orders must be received by 3.00 PM the previous day, to allow for procurement of fresh supplies and preparation time.
5. We suggest that dinner be served by 10.00 PM at the latest. For late service, food can be made available in casseroles.
6. Parties, loud noises and music that disturb neighbours is not permitted.
7. Breakages or damage of home items will be charged on 'actuals'.
8. Any illegal activity, use of narcotics, prostitution, etc. are not permitted.
9. Arrival 2.00 PM and Departure 11.00 AM
10. All male staff (drivers, PSOs) sleep arrangements can be made outside, at a nominal cost, and are not permitted to stay in the villa. We will be happy to make these arrangements for you.
11. Sleeping in areas other than bedrooms is not permitted.
12. NO SMOKING INDOORS. BOOKING WILL BE INSTANTLY CANCELED.
`;

  return (
    <div className="text-gray-800 text-base mb-9 border-t border-gray-200">
      <p className="whitespace-pre-line">{shortText}</p>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="mt-4 text-sm font-semibold underline text-gray-700 hover:text-black hover:cursor-pointer">
            Show more
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/50 fixed inset-0 z-40" />
          <Dialog.Content
            className="overflow-y-auto fixed z-50 top-1/2 left-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-0"
            style={{ maxHeight: '80vh' }}
          >
          
            <div className="overflow-y-auto h-full px-8 py-4"> 
              {/* Close Button */}
              <div className="flex items-start">
                <Dialog.Close asChild>
                  <button
                    className="w-9 h-9 flex items-center justify-start rounded-full text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </Dialog.Close>
              </div>

              {/* Title */}
              <h2 className="mt-3 text-2xl font-bold text-gray-900">About this space</h2>

              {/* Content */}
              <div className="mt-4 whitespace-pre-line text-gray-800 text-sm leading-relaxed">
                <h3 className="text-base font-semibold mb-2">La vida - The life.</h3>
                {fullText}
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default AboutThisSpace;
