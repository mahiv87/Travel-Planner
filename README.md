# Travel Planner

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

![GIF of Travel Planner](./assets/travel-planner.gif)

API to create trips, locations, and travellers to help plan a trip

## Technologies

- JavaScript
- Node.js
- Express.js
- MySQL
- Sequelize
- dotenv
- Heroku


## Installation

No installation required

## Usage

Use Heroku deployment for API request <br />
`https://enigmatic-plains-36234.herokuapp.com/api/travellers`

GET, and DELETE request for a single Traveller `/api/travellers/"traveller_id"`

Use the following sample data as the request body POST `/api/travellers` route:

  ```json
  {
    "name": "Marcus",
    "email": "maherreraiv1987@gmail.com"
  }
  ```

`https://enigmatic-plains-36234.herokuapp.com/api/locations`

GET, and DELETE request for a single Location `/api/locations/"location_id"`

Use the following sample data as the request body POST `/api/locations` route:

  ```json
  {
    "location_name": "Denver"
  }
  ```

`https://enigmatic-plains-36234.herokuapp.com/api/trips`

GET, and DELETE request for a single Trip `/api/trips/"trip_id"`

Use the following sample data as the request body POST `/api/trips` route:

  ```json
  {
    "trip_budget": 2000.50,
    "traveller_amount": 6,
    "traveller_id": 1,
    "location_id": 1
  }
  ```

  View associated Trips with a Traveller `/api/travellers/"traveller_id"`

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to 
whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE. See more here [MIT](https://opensource.org/licenses/MIT)

## Contributing 

Name and GitHub link

## Tests

N/A

## Questions

You can submit any questions to:

[GitHub](https://github.com/mahiv87)

maherreraiv1987@gmail.com

