import React from 'react';
import Candidate from '../interfaces/Candidate.interface';



// Define the props for the SavedCandidates component
interface SavedCandidatesProps {
  savedCandidates: Candidate[];
  onRemoveCandidate: (username: string) => void; // Function to remove a candidate from the list
}

const SavedCandidates: React.FC<SavedCandidatesProps> = ({ savedCandidates, onRemoveCandidate }) => {
  if (savedCandidates.length === 0) {
    return <div>No candidates have been accepted.</div>;
  }

  return (
    <div>
      <h2>Saved Candidates</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Avatar</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Username</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Location</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Company</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.username}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                <img src={candidate.avatar} alt={`${candidate.name}'s avatar`} width={50} height={50} style={{ borderRadius: '50%' }} />
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{candidate.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{candidate.username}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{candidate.location}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{candidate.email}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{candidate.company}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                <button onClick={() => onRemoveCandidate(candidate.username)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;