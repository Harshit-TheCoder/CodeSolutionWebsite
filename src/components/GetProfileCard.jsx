import React, {useState, useRef} from 'react'
import html2canvas from "html2canvas";

const GetProfileCard = () => {
    const [profileData, setProfileData] = useState(null);
    const cardRef = useRef(null);

    const captureImage = async (e) => {
        e.preventDefault();
        if (cardRef.current) {
            const canvas = await html2canvas(cardRef.current);
            const dataUrl = canvas.toDataURL("image/png");
            
            // Create a download link
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "profile-card.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };


    const handleClick = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("User not found. Please log in.");
            return;
        }

        const name = user.name;
        const userId = user._id;

        let result = await fetch("http://localhost:5000/getProfileCard",{
            method:"post",
            body: JSON.stringify({name, userId}),
            headers:{
                'Content-Type':'application/json',
            }
        });
        let data = await result.json();

            if (data.success) {
                setProfileData(data.profile);
            } else {
                alert("Error occurred while fetching profile.");
            }
        
    };

  return (
    <>
        <form>
            <div className="container">
                <div className="mb-3">
                    <button className='btn btn-success' onClick={(e) => handleClick(e)}>Generate Profile Card</button>
                </div>
                <div className="mb-3">
                    <button className='btn btn-success' onClick={(e) => captureImage(e)}>Copy Profile Card</button>
                </div>
            </div>
        </form>
        <div className="container">
            <div className='result'>
            {profileData ? (
                        <div ref={cardRef}>
                            <h3>Profile Details</h3>
                            <p><strong>Name:</strong> {profileData.name}</p>
                            <p><strong>Email:</strong> {profileData.email}</p>
                            <p><strong>Leetcode:</strong> {profileData.leetcode}</p>
                            <p><strong>Codeforces:</strong> {profileData.codeforces}</p>
                            <p><strong>CodeChef:</strong> {profileData.codechef}</p>
                            <p><strong>GitHub:</strong> {profileData.github}</p>
                            <p><strong>LinkedIn:</strong> {profileData.linkedin}</p>
                            <p><strong>Points:</strong> {profileData.points}</p>
                            <p><strong>Easy Tests:</strong> {profileData.easyTests}</p>
                            <p><strong>Medium Tests:</strong> {profileData.mediumTests}</p>
                            <p><strong>Hard Tests:</strong> {profileData.hardTests}</p>
                        </div>
                    ) : (
                        <p>No profile data available.</p>
                    )}
            </div>
        </div>
    </>
  )
}

export default GetProfileCard