# Prompt Web App
A Prompt Web App that allows users to create, manage, and discover prompts with ease. Users can create, edit, and delete their own prompts, view other users' profiles, and explore related prompts through a search bar or clickable tags. The app is built using Next.js for server-side rendering, TypeScript for robust type safety, Tailwind CSS for modern styling, and MongoDB for data persistence. Authentication is handled through Google Auth Provider for a seamless and secure user experience.

# Features
User Authentication: Secure Google authentication for signing in.
Create, Read, Update, Delete (CRUD): Users can create, edit, and delete prompts.
User Profiles: View other users' profile details, including their posted prompts.
Search Functionality: Search for prompts by keywords or tags.
Tag System: Clickable tags on prompts for easy discovery of related posts.
Technology Stack
Framework: Next.js - React framework with server-side rendering and static generation.
Language: TypeScript - Ensuring type safety across the app.
Styling: Tailwind CSS - Utility-first CSS framework for styling.
Database: MongoDB - NoSQL database for scalable data storage.
Authentication: Google Auth Provider - Secure and simple user authentication.


bash
Copy code
git clone https://github.com/your-username/prompt-web-app.git
Navigate to the project directory:

bash
Copy code
cd prompt
Install dependencies:

bash
Copy code
npm install
Set up your environment variables: Create a .env file in the root directory and add your MongoDB URI and Google Auth credentials:

makefile
Copy code
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
Run the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to view the app.

# Project Structure
pages/: Contains Next.js pages for routes.
components/: Reusable UI components such as the prompt card, search bar, etc.
styles/: Global and component-specific styles using Tailwind CSS.
lib/: Utility functions and MongoDB connection setup.
models/: MongoDB schemas for storing prompt and user data.


# Features Breakdown
Authentication: Users can log in using their Google accounts, managed by NextAuth.js with Google as the authentication provider.
Prompt Creation and Management: Users can:
Create a new prompt.
Edit or delete their own prompts.
Search for prompts using a search bar or browse by tags.
User Profiles: Users can view other users' profiles and the prompts they have created.
Tag System: Every prompt has associated tags, making it easy to search for related posts or filter by tag.
Future Improvements
Prompt Upvotes or Likes: Implement a feature for users to upvote or like prompts.
Pagination: Add pagination to improve performance with large numbers of prompts.
Real-time Updates: Add WebSocket or Pusher for real-time prompt updates and notifications.
Contributing
Feel free to contribute to this project by submitting a pull request or opening an issue. Any improvements, feature requests, or bug fixes are welcome!
