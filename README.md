# Project README

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/cherish2003/qest-assignment.git
   cd qest-assignment
   ```

2. Install dependencies:
   ```bash
   npm install

   ```

3. Start the development server:
   ```bash
   npm run dev

   ```

4. Open the application in your browser at `http://localhost:3000`.

### Build for Production
To create a production build, run:
```bash
npm run build
# or
yarn build
```
The build will be generated in the `build` directory.

## Features

### Core Features
1. **User Interface**: 
   - Simple and intuitive design for ease of navigation and usability.
   - Responsive layout suitable for various screen sizes.

2. **Code Quality**:
   - Clean, modular, and maintainable code structure.
   - Adheres to industry best practices.

3. **Core Functionalities**:
   - **Service Selection**: Users can browse and select available services.
   - **Cart Management**: Add, update, or remove services from the cart.
   - **Bill Management**: View and download receipt of the bills of different customers.
   - **Checkout Process**: Capture user details and simulate payments.

###  Enhancements :
1. **Filtering**:
   - Enable users to filter services by category.

2. **Billing info**:
   - Enables to see various bills of users along with receipt download.

3. **Analytics and Insights**:
   - Display metrics such as total revenue, services sold, and Most Popular Services.


## Assumptions
- The application assumes all services have unique IDs.
- Pricing is provided in USD by default.
- The cart persists across sessions using `localStorage`.

## Limitations
- No backend integration: Data is stored and manipulated on the client side.
- Payment simulation only: Actual payment gateway integration is not implemented.
  

