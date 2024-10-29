import React, { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import SavedCandidates from './SavedCandidates';
// import SavedCandidates from './SavedCandidates'; // Import the SavedCandidates component

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the initial list of candidate usernames
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);
        const users = await searchGithub(); // Fetch random users using the API
        const userPromises = users.map(async (user: any) => {
          return await searchGithubUser(user.login); // Fetch detailed user info
        });

        const detailedCandidates = await Promise.all(userPromises);
        // Map the detailed candidate data to the appropriate shape
        const formattedCandidates: Candidate[] = detailedCandidates.map((user: any) => ({
          name: user.name || 'N/A',
          username: user.login,
          location: user.location || 'N/A',
          avatar: user.avatar_url,
          email: user.email || 'N/A',
          html_url: user.html_url,
          company: user.company || 'N/A',
        }));

        setCandidates(formattedCandidates);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch candidates');
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  // Handle saving the candidate and moving to the next
  const handleSaveCandidate = () => {
    const candidateToSave = candidates[currentCandidateIndex];
    setSavedCandidates((prevSaved) => {
      // Optional: Prevent duplicates
      if (prevSaved.find((c) => c.username === candidateToSave.username)) {
        return prevSaved;
      }
      return [...prevSaved, candidateToSave];
    });
    goToNextCandidate();
  };

  // Handle removing a saved candidate
  const handleRemoveCandidate = (username: string) => {
    setSavedCandidates((prevSaved) =>
      prevSaved.filter((candidate) => candidate.username !== username)
    );
  };

  // Skip the current candidate and move to the next
  const handleSkipCandidate = () => {
    goToNextCandidate();
  };

  // Go to the next candidate
  const goToNextCandidate = () => {
    setCurrentCandidateIndex((prevIndex) => prevIndex + 1);
  };

  if (loading) {
    return <div>Loading candidates...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (currentCandidateIndex >= candidates.length) {
    return (
      <div>
        <div>No more candidates available.</div>
        <SavedCandidates
          savedCandidates={savedCandidates}
          onRemoveCandidate={handleRemoveCandidate}
        />
      </div>
    );
  }

  const currentCandidate = candidates[currentCandidateIndex];

  return (
    <div>
      <h2>Candidate Search</h2>
      <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
        <img
          src={currentCandidate.avatar}
          alt={`${currentCandidate.name}'s avatar`}
          width={100}
          height={100}
          style={{ borderRadius: '50%' }}
        />
        <h3>{currentCandidate.name}</h3>
        <p><strong>Username:</strong> {currentCandidate.username}</p>
        <p><strong>Location:</strong> {currentCandidate.location}</p>
        <p><strong>Email:</strong> {currentCandidate.email}</p>
        <p><strong>Company:</strong> {currentCandidate.company}</p>
        <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </div>

      <div style={{ marginTop: '16px' }}>
        <button onClick={handleSaveCandidate} style={{ marginRight: '8px' }}>
          +
        </button>
        <button onClick={handleSkipCandidate}>-</button>
      </div>

      {/* Render SavedCandidates below the current candidate */}
      <SavedCandidates
        savedCandidates={savedCandidates}
        onRemoveCandidate={handleRemoveCandidate}
      />
    </div>
  );
};

export default CandidateSearch;