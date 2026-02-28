# Free Online JSON Viewer, Formatter & Validator

A fast, modern, and user-friendly web application for viewing, formatting, and validating JSON data. Built with Next.js and React, this tool provides an intuitive interface for developers to work with JSON files efficiently.

![JSON Viewer Demo](public/favicon.ico) <!-- You can replace this with an actual screenshot of the app -->

## ✨ Features

- **JSON Formatting & Prettifying**: Automatically format minified JSON strings into readable, indented structures.
- **JSON Validation**: Instantly detect syntax errors in your JSON code with clear error messages.
- **Interactive Editor**: Powered by Monaco Editor and JSONEditor for a powerful coding experience.
- **Dark/Light Mode**: Seamlessly switch between dark and light themes for comfortable viewing in any environment.
- **Responsive Design**: Works flawlessly on both desktop and mobile devices.
- **SEO Friendly**: Clean URLs, optimized metadata, and automatic sitemap generation.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Editors**: `@monaco-editor/react`, `jsoneditor`
- **Icons**: `lucide-react`
- **Deployment**: Vercel ready

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sainath-666/json-viewer.git
   cd json-viewer
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the application for production.
- `npm run postbuild`: Generates `sitemap.xml` automatically after the build completes.
- `npm run start`: Serves the built production application.
- `npm run lint`: Runs ESLint to check for code issues.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

Make sure to run `npm run lint` and `npm run build` before submitting a Pull Request! A GitHub Actions workflow is set up to automatically enforce these checks for PRs targeting `main`, `master`, and `SAI@FEATURES` branches.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
