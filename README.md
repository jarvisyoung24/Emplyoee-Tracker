Candidate Search Application
----------------------------

Description
-----------

This project is a Candidate Search Application built using React, TypeScript, and Vite. The application integrates with the GitHub API to allow employers to search for and manage potential candidates for hiring. The app provides an intuitive interface to display candidate information, save potential candidates, and persist data for future use. This professional-grade solution emphasizes efficient API usage, local storage, and modern web development practices.

User Story
----------
AS AN employerI WANT a candidate search applicationSO THAT I can hire the best candidates

Acceptance Criteria
-------------------
GIVEN a candidate search application, WHEN the candidate search page loadsTHEN the information for one candidate should be displayed, including:

Name

Username

Location

Avatar

Email

GitHub Profile URL (html_url)

Company

WHEN I click the "+" button, THEN the candidate should be saved to the list of potential candidates, and the next candidate's information should be displayed

WHEN I click the "-" button, THEN the next candidate's information should be displayed without saving the current candidate

WHEN there are no candidates available to review, THEN an appropriate message should be shown indicating no more candidates are available

WHEN the potential candidates page loads, THEN the user should see a list of previously saved potential candidates, displaying the same fields as above

WHEN the page reloads, THEN the list of potential candidates should persist and be available for viewing

WHEN there are no potential candidates, THEN an appropriate message should be displayed indicating no candidates have been accepted




Development
-----------
The starter code provides:

The application folder structure and scaffolding.

Code to retrieve data from the GitHub API located in ./Develop/src/api/API.tsx.

Tasks

Complete the CandidateSearch and SavedCandidates pages.

Create any additional components as needed.

Implement the following functionalities:

Fetch candidate data from the GitHub API.

Display candidate details as per the acceptance criteria.

Handle saving and skipping candidates.

Use local storage to persist saved candidate data.

Test the application thoroughly to ensure all functionalities work as expected.

