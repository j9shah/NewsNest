# NewsNest 🔤🔄

NewsNest is a simple news aggregator that allows users to explore, save, and manage articles. The application is built with a Node.js backend and a React frontend, providing a seamless experience for news enthusiasts. 🌍

---

## Features 🌟

- **Explore News**: Browse the latest articles fetched using the NewsAPI. 🔍
- **Search**: Find articles by keyword to stay updated on specific topics. ✨
- **User Authentication**: Register and log in to save your favorite articles. 🔐
- **Saved Articles**: Access and manage a personalized list of saved articles. 📂

---

## Tech Stack ⚙️

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **API Integration**: NewsAPI 🔄

---

## Getting Started 🎉

Follow these instructions to set up and run the project locally. 🚛

### Prerequisites 

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- NewsAPI key (sign up at [NewsAPI](https://newsapi.org/) to get your API key)

### Installation 

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/NewsNest.git
   cd NewsNest
   ```

2. Install dependencies:
   ```bash
   cd NewsNest/backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up your `.env` file:
   - Navigate to the `backend` folder.
   - Create a `.env` file and add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     REACT_APP_NEWS_API_KEY=your_newsapi_key
     ```

4. Start the application:
   - Start the backend:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend:
     ```bash
     cd frontend
     npm start
     ```

---

## Screenshots 📷

1. **Homepage**
   <img src="(https://github.com/user-attachments/assets/76ab28b8-a4dc-461f-8303-8431832249ed)" alt="Homepage Screenshot" width="500">

3. **Login/Register**
   ![image](https://github.com/user-attachments/assets/3121a0fb-58df-4e7d-8094-ec858f557b63) ![image](https://github.com/user-attachments/assets/3b777dcf-cf84-4dd3-8072-91f5ac7780ac)

4. **Explore Articles**
   ![image](https://github.com/user-attachments/assets/69761a26-30ab-4bfc-8e7f-a691c1fc2950)

5. **Saved Articles**
   ![image](https://github.com/user-attachments/assets/e36fc139-f7f3-41eb-8218-5e3b2cf6ae1a)

---

## Future Improvements ✨

- Add RSS feed integration for customizable news sources. 🔄
- Migrate to PostgreSQL for enhanced relational database features. 📃
- Implement pagination or infinite scrolling for better UX. 🚀
- Deploy the application to a cloud platform (e.g., AWS, Heroku, or Vercel). ☁️

---

## Acknowledgments ✨

- NewsAPI for providing real-time news data. 🌐


