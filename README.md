# Welcome to Digital OPD

This is a chatbot based learning game that helps students simulate a hospital’s OPD (outpatient department) environment and diagnose patients along with a AI senior doctor. The AI senior doctor provides the description of the patient and their symptoms.

Demo posted on youtube : 

# 🚀 How to Run the App
Prerequisites
Node.js installed on your computer
Expo Go app installed on your mobile device
PostgreSQL installed (for local database)

# Setup Steps

1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/digital-opd.git
cd digital-opd
```
2. Install dependencies
```bash
npm install
```
3. Create a local PostgreSQL database named 'opd_game'
   
4. Update the database configuration in app/config.js with your local PostgreSQL credentials

5. Start the development server
```bash
npm run web
```

6. Running on your phone:

->Install 'Expo Go' from your phone's app store
->Scan the QR code shown in the terminal with your phone's camera
->The app will open in Expo Go

# 📝 Note
This app is configured to work with a local PostgreSQL database. Users will need to set up their own database with the following configuration:
```bash
{
  user: 'postgres',
  host: 'localhost',
  database: 'opd_game',
  password: 'your_password',  // Change this
  port: 5432
}
```

# 🛠️ Built With

React Native
Expo
PostgreSQL
Google Gemini AI
WebSocket for real-time communication


The game involves identifying the right test for the patient symptoms and diagnosing the patient based on the test.
The patient reveals symptoms, the senior AI doctor asks the learner what should be the next step in helping the patient. The learner has to answer in free form text. For every patient, the learner has to understand which is the best test to take for their symptoms, and post getting the test results, what’s the next best diagnosis.
