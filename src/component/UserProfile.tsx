import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser({ id: 1, name: "John Doe", email: "john.doe@example.com" });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>ユーザー情報</h2>
      {loading ? (
        <p>Loading user data...</p>
      ) : (
        <p>
          {user?.id},{user?.name},{user?.email}
        </p>
      )}
    </div>
  );
};

export default UserProfile;
