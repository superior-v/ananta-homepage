# Ananta Homepage

Welcome to the Ananta homepage project! This project is built using React, Tailwind CSS, and Radix UI, providing a modern and responsive web experience.

## Getting Started

To get started with the Ananta homepage, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ananta-homepage
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the development server**:
   Start the development server with:
   ```bash
   npm run dev
   ```
   Your application will be available at `http://localhost:3000`.

## Project Structure

The project is organized as follows:

- `public/`: Contains the main HTML file and static assets.
- `src/`: Contains all the source code for the application.
  - `main.jsx`: Entry point for the React application.
  - `App.jsx`: Main application component.
  - `pages/`: Contains different pages of the application.
    - `Home.jsx`: Homepage component.
  - `components/`: Contains reusable components.
    - `Header.jsx`: Navigation and branding.
    - `Footer.jsx`: Footer content.
    - `ui/radix/`: Contains UI components using Radix UI.
      - `Dialog.jsx`: Modal dialog component.
      - `Dropdown.jsx`: Dropdown menu component.
  - `styles/`: Contains CSS files.
    - `tailwind.css`: Tailwind CSS styles.
    - `index.css`: Global styles.
  - `hooks/`: Contains custom hooks.
    - `useWindowSize.js`: Hook for window size.
  - `utils/`: Contains utility functions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Radix UI**: A set of unstyled, accessible components for building high-quality design systems.

## Contributing

If you'd like to contribute to the project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.