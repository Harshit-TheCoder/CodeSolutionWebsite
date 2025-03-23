import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Main from "./components/main";

const Leaderboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch("http://localhost:5000/leaderboard");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };
        fetchLeaderboard();
    }, []);

    return (
      <>
        <Header />
        <Main>
        <h1 className="text-3xl font-bold text-center mb-4" style={{color:"white"}}>Leaderboard</h1>
          <div className="container mx-auto p-4" style={{width:"90%", display:"flex", justifyContent:"center"}}>
              
              <table className="table-auto w-full border-collapse border border-gray-400">
                  <thead>
                      <tr className="bg-gray-200" style={{color: "yellow"}}>
                          <th className="border border-gray-400 px-4 py-2">Rank</th>
                          <th className="border border-gray-400 px-4 py-2">Name</th>
                          <th className="border border-gray-400 px-4 py-2">Points</th>
                          <th className="border border-gray-400 px-4 py-2">Hard Tests</th>
                          <th className="border border-gray-400 px-4 py-2">Medium Tests</th>
                          <th className="border border-gray-400 px-4 py-2">Easy Tests</th>
                          <th className="border border-gray-400 px-4 py-2">Total Tests</th>
                      </tr>
                  </thead>
                  <tbody>
                      {data.map((user, index) => (
                          <tr key={user.userId} className="text-center" style={{color:"white"}}>
                              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                              <td className="border border-gray-400 px-4 py-2">{user.name}</td>
                              <td className="border border-gray-400 px-4 py-2">{user.points}</td>
                              <td className="border border-gray-400 px-4 py-2">{user.hardTests}</td>
                              <td className="border border-gray-400 px-4 py-2">{user.mediumTests}</td>
                              <td className="border border-gray-400 px-4 py-2">{user.easyTests}</td>
                              <td className="border border-gray-400 px-4 py-2">{user.totalTests}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
        </Main>
      </>
        
    );
};

export default Leaderboard;
