# News Aggregator Project

This is a React-based news aggregator application that allows users to search, filter, and customize news articles from various sources using APIs. The application is fully responsive and supports features like date filtering, language selection, and sorting options.

---

## Features

- **Search Articles**: Search for news articles by keywords.
- **Filters**:
  - Date range (From and To dates).
  - Category (e.g., Business, Entertainment, etc.).
  - Source (e.g., BBC News, CNN).
  - Language.
  - Sorting (Newest, Most Relevant, Most Popular).
- **Responsive Design**: Works seamlessly across devices (desktop, tablet, mobile).
- **Dynamic API Integration**: Fetches articles from News APIs.

---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**

---

## Installation

1. Clone the repository:
   ```bash
   cd news-aggregator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Create a `.environment.js` file in the root directory.
   - Add your API keys in the following format:
     ```environment.js
     ```

---

## Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
news-aggregator/
├── public/                                      # Static files
│   ├── index.html                               # Main HTML template
│   ├── favicon.ico                              # App favicon
├── src/                                         # Source code
│   ├── components/                              # Reusable components
|   |   |── HoriconstalCard/                     # Horizontal card
│   │   |   |── HoriconstalScroller.js           # Horizontal scroll component
│   │   |   |── HorizontalScroller.module.css    # Horizontal styles
|   |   |── Latest news/                         # Horizontal card
|   |   |   |── Cards/                           # latest newscard
│   │   |   |   |── ArticleCard.js               # Vertiacal card component
│   │   |   |   |── ArticleCardLoading.js        # Vertiacal card component loading
|   |   |── Latest news/                         # Horizontal card
|   |   |   |── Filter/                          # Filter newscard
│   │   |   |   |── FilterBar.js                 # FilterBar component
│   │   |   |   |── SearchBar.js                 # Search Bar component 
|   |   |── LayoutNew/                           # Layout 
|   |   |   |── Footer/                          # Filter newscard
│   │   |   |   |── Footer.js                    # Footer component
│   │   |   |   |── Footer.module.css            # Footer css
|   |   |   |── Header/                          # Filter newscard
│   │   |   |   |── Header.js                    # Footer component
│   │   |   |   |── Header.module.css            # Footer css
│   ├── containers/                              # containers Pages
|   |   |──Home.js                               # Home Page
│   ├── utils/                                   # utils Data
|   |   |──constants.js                          # constant Data
|   |   |──endpoints.js                          # Api endpoints
|   |   |──instance.js                           # Api Calls
|   |   |── api/                                 # API integration files
│   │   |   |── newsAPI.js                       # Handles API calls
│   ├── pages/                                   # Page components
│   │   ├── HomePage.js                          # Main landing page
│   ├── styles/                                  # CSS and styles
│   ├── App.js                                   # Main app component
│   ├── index.js                                 # App entry point
│   ├── AllRoutes.js                             # Routes configuration
|   ├── environment.js                           # env file with keys
├── README.md                                    # Documentation (this file)
```

---

## API Integration

This application integrates with News APIs to fetch articles. You need an API key for each service:

1. **NewsAPI**: [https://newsapi.org/](https://newsapi.org/)
2. **Guardian APIs**: [https://content.guardianapis.com](https://guardianapis.com)
3. **New York Times APIs**: [https://api.nytimes.com/svc](https:///nytimes.com/)

---

## Environment Variables

The following environment variables are used in this project:

- **REACT_APP_NEWS_API_KEY**: API key for the NewsAPI.

Make sure to store these securely in the `.env` file.

---

## Features Overview

### Filters
- **Text Search**:
- Users can search for articles by keyword.

- **From Date & To Date**:
  - Restrict future dates.
  - Validate that the "From Date" is not after the "To Date."
- **Language**: Select articles by language using ISO-639-1 codes (e.g., `en` for English).
- **Sort By**: Options include `publishedAt`, `relevancy`, and `popularity`.

### Responsive Design

The application is designed to work seamlessly across devices:
- Desktop: Multiple columns for articles.
- Tablet: Adjusted layout.
- Mobile: Single column for ease of use.

---

## Customization

- **Adding More Filters**: Extend the `FilterBar` component.
- **API Endpoints**: Add or modify endpoints in the `Api` directory.

---

## Available Scripts

- **Start the Development Server**:
  ```bash
  npm start
  ```

- **Build the Application**:
  ```bash
  npm run build
  ```

- **Run Tests**:
  ```bash
  npm test
  ```

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

