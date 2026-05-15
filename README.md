Currency Converter Web Application
Overview

This is a browser-based currency converter built using JavaScript that fetches real-time exchange rates from a public API. The application allows users to convert between multiple currencies dynamically and visualizes selected currencies using country flags.

The project demonstrates API integration, asynchronous JavaScript, and DOM manipulation.

Features
Real-time currency conversion using external API
Dynamic currency dropdown population
Automatic flag updates based on selected currency
Input validation for conversion amount
Responsive and interactive UI behavior
Default conversion presets (USD → INR)
Tech Stack
HTML
CSS
JavaScript (Vanilla)
Fetch API (for HTTP requests)
Public Currency API:
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies
How It Works
Currency dropdowns are dynamically populated from a predefined currency list.
When a user selects a currency, the corresponding country flag is updated using a flag API.
On form submission:
The app fetches live exchange rates for the selected base currency.
The target conversion rate is extracted from the API response.
The final converted amount is calculated and displayed in real time.
API Integration

This project uses a free public currency API:

Base endpoint:
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies


Example request format:

/v1/currencies/{baseCurrency}.json

The response returns exchange rates for multiple currencies, which are parsed dynamically in JavaScript.

Project Structure
currency-converter/
│
├── index.html        # UI structure
├── style.css         # Styling
├── app.js            # Main logic (API + DOM manipulation)
└── codes.js    # Currency-to-country mapping
Key Concepts Used
DOM manipulation using querySelector and event listeners
Handling NodeLists vs single DOM elements
Asynchronous programming using async/await
Fetch API for external data retrieval
Dynamic UI updates based on API response
Basic error handling and input validation
How to Run
Clone the repository
Open index.html in a browser
Select currencies and enter amount
Click convert

No build tools or dependencies required.

Learning Outcome

This project helped reinforce:

Working with real-time APIs
Handling asynchronous JavaScript flows
DOM manipulation at scale
Debugging common frontend issues (event binding, NodeList handling)
Structuring small frontend applications
Disclaimer

Exchange rates are fetched from a third-party public API and may not reflect real-time financial accuracy.
