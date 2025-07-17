import React, { useState } from "react";
import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <h1>Leaderboard</h1>
      <UserSelector onSelect={setSelectedUser} />
      {selectedUser && <ClaimButton userId={selectedUser} onClaim={() => {}} />}
      <Leaderboard />
    </div>
  );
}

export default App;
