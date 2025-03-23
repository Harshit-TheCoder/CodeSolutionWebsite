import React, { useState, useEffect } from 'react'

const AccountUpdateForm = () => {

    const [leetcode, setLeetcode] = useState('');
    const [codeforces, setCodeforces] = useState('');
    const [codechef, setCodechef] = useState('');
    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');

    useEffect(() => {
        const fetchUserLinks = async () => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) {
                alert("User not found. Please log in.");
                return;
            }

            try {
                const response = await fetch(`http://localhost:5000/getLinks/${user._id}`);
                const data = await response.json();

                if (data.success) {
                    setLeetcode(data.links.leetcode || "");  // ✅ Use `data.links`
                    setCodeforces(data.links.codeforces || "");
                    setCodechef(data.links.codechef || "");
                    setGithub(data.links.github || "");
                    setLinkedin(data.links.linkedin || "");
                } else {
                    console.error("Failed to fetch user links:", data.message);
                }
            } catch (error) {
                console.error("Error fetching links:", error);
            }
        };

        fetchUserLinks();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("User not found. Please log in.");
            return;
        }

        const name = user.name;
        const userId = user._id;

        // Ensure that leetcode, codeforces, codechef, github, linkedin exist (assuming state)
        if (!leetcode || !codeforces || !codechef || !github || !linkedin) {
            alert("Please fill all fields before submitting.");
            return;
        }

        let result = await fetch("http://localhost:5000/saveLinks",{
            method:"post",
            body: JSON.stringify({name, userId , leetcode, codeforces, codechef, github, linkedin}),
            headers:{
                'Content-Type':'application/json',
            }
        });
        result = await result.json();
        if(result.Message === "Success"){
            alert("Links saved successfully.");
        }
        else{
            alert("Error occurred");
        }
        
    };
  return (
    <>
        <form>
            <div className="container">
                <div className="row mb-3">
                    <input type="text" placeholder='Paste you Leetcode Profile Link' className='form-control' 
                        onChange={(e)=>setLeetcode(e.target.value)}
                        value={leetcode}
                    />
                </div>
                <div className="row mb-3">
                    <input type="text" placeholder='Paste you Codeforces Profile Link' className='form-control'
                        onChange={(e)=>setCodeforces(e.target.value)}
                        value={codeforces}
                    />
                </div>
                <div className="row mb-3">
                    <input type="text" placeholder='Paste you CodeChef Profile Link' className='form-control'
                        onChange={(e)=>setCodechef(e.target.value)}
                        value={codechef}
                    />
                </div>
                <div className="row mb-3">
                    <input type="text" placeholder='Paste you Github Profile Link' className='form-control' 
                        onChange={(e)=>setGithub(e.target.value)}
                        value={github}
                    />
                </div>
                <div className="row mb-3">
                    <input type="text" placeholder='Paste you LinkedIn Profile Link' className='form-control'
                        onChange={(e)=>setLinkedin(e.target.value)}
                        value={linkedin}
                    />
                </div>
                <div className="row mb-3">
                    <button type="button" className='btn btn-success' onClick={(e)=>handleSubmit(e)}>Submit Details</button>
                </div>
            </div>
        </form>
    </>
  )
}

export default AccountUpdateForm