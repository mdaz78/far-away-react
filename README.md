# Travel List 🧳

A modern, interactive travel packing list application built with React and Vite. Keep track of items you need for your trip, mark them as packed, and stay organized with sorting and statistics features.

## Features

- ✅ **Add Items**: Add items to your packing list with custom quantities (1-20)
- 📦 **Mark as Packed**: Toggle items between packed and unpacked status
- 🗑️ **Delete Items**: Remove individual items from your list
- 📊 **Statistics**: View packing progress with percentage completion
- 🔄 **Sort Options**: Sort items by:
  - Input order (default)
  - Description (alphabetically)
  - Packed status
- 🧹 **Clear List**: Remove all items with confirmation prompt
- 🎯 **Progress Tracking**: Real-time updates on packing completion

## Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd travel-list
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement (HMR)
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
travel-list/
├── src/
│   ├── components/
│   │   ├── Form.jsx          # Form component for adding new items
│   │   ├── Item.jsx           # Individual item component
│   │   ├── Logo.jsx           # Application logo
│   │   ├── PackingList.jsx    # Main list component with sorting
│   │   └── Stats.jsx          # Statistics and progress display
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
└── vite.config.js            # Vite configuration
```

## Usage

1. **Adding Items**: Enter an item description and select a quantity (1-20), then click "Add"
2. **Marking Items**: Click the checkbox next to an item to mark it as packed/unpacked
3. **Deleting Items**: Click the delete button (❌) next to an item to remove it
4. **Sorting**: Use the dropdown menu to sort items by input order, description, or packed status
5. **Clearing List**: Click "Clear list" to remove all items (with confirmation)
6. **View Progress**: Check the footer for packing statistics and completion percentage

## Development

This project uses:

- **React Hooks** (`useState`) for state management
- **Component-based architecture** for modularity
- **ESLint** for code quality and consistency

## License

This project is part of "The Ultimate React Course 2025" learning materials.
