import { useEffect, useState } from "react";
import { createTeam, getAllMembers, updateMember, deleteMember, uploadFiles } from "../apiCalls/apiCalls.js";

const TeamComponent = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [memberData, setMemberData] = useState({ name: "", skills: "", experience: "", img: "" });
    const [editingMember, setEditingMember] = useState(null);
    const [newImage, setNewImage] = useState(null);

    useEffect(() => {
        (async () => {
            let result = await getAllMembers();
            if (result) setTeamMembers(result);
        })();
    }, []);

    // Handle File Upload
    const handleFileUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", newImage);

        const result = await uploadFiles(formData);

        if (result?.data?.file?.[0]?.filename) {
            setMemberData({ ...memberData, img: result.data.file[0].filename });
        } else {
            alert("Image upload failed");
        }
    };

    // Add Team Member
    const handleCreateMember = async () => {
        let result = await createTeam(memberData);
        if (result) {
            setTeamMembers([...teamMembers, { ...memberData, _id: result._id }]);
            setMemberData({ name: "", skills: "", experience: "", img: "" });
        }
    };

    // Update Team Member
    const handleUpdateMember = async () => {
        let result = await updateMember(editingMember._id, memberData);
        if (result) {
            setTeamMembers(teamMembers.map(member =>
                member._id === editingMember._id ? { ...member, ...memberData } : member
            ));
            setEditingMember(null);
            setMemberData({ name: "", skills: "", experience: "", img: "" });
        }
    };

    // Delete Team Member
    const handleDeleteMember = async (id) => {
        let result = await deleteMember(id);
        if (result) {
            setTeamMembers(teamMembers.filter(member => member._id !== id));
        }
    };

    return (
        <div className="p-4 rounded">
            <h2 className="text-2xl font-bold mb-4">Manage Team Members</h2>

            {/* Add or Edit Member Form */}
            <div className="mb-4">
                <div>
                    <label className="label-text text-2xl" htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Enter Member Name"
                        value={memberData.name}
                        onChange={(e) => setMemberData({ ...memberData, name: e.target.value })}
                        className="w-full rounded-lg p-4 text-sm shadow-sm border focus:ring-purple-400"
                        id="name"
                    />
                </div>
                <div>
                    <label className="label-text text-2xl" htmlFor="skills">Skills</label>
                    <input
                        type="text"
                        placeholder="Enter Member Skills"
                        value={memberData.skills}
                        onChange={(e) => setMemberData({ ...memberData, skills: e.target.value })}
                        className="w-full rounded-lg p-4 text-sm shadow-sm border focus:ring-purple-400"
                        id="skills"
                    />
                </div>
                <div>
                    <label className="label-text text-2xl" htmlFor="experience">Experience</label>
                    <input
                        type="text"
                        placeholder="Enter Member Experience"
                        value={memberData.experience}
                        onChange={(e) => setMemberData({ ...memberData, experience: e.target.value })}
                        className="w-full rounded-lg p-4 text-sm shadow-sm border focus:ring-purple-400"
                        id="experience"
                    />
                </div>

                {/* File Upload */}
                <form className="relative w-full mb-4" onSubmit={handleFileUpload}>
                    <label className="label-text text-2xl" htmlFor="memberImage">Profile Image</label>
                    <div className="relative w-full">
                        <input
                            className="w-full rounded-lg p-4 text-sm shadow-sm border focus:ring-purple-400 pr-20"
                            type="file"
                            onChange={(e) => setNewImage(e.target.files[0])}
                            accept="image/*"
                            id="memberImage"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 text-sm rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                        >
                            Upload
                        </button>
                    </div>
                </form>

                {/* Add or Update Button */}
                {editingMember ? (
                    <button onClick={handleUpdateMember} className="bg-purple-600 text-white px-4 py-2 text-sm rounded-lg opacity-80 hover:opacity-100 transition-opacity">Update Member</button>
                ) : (
                    <button onClick={handleCreateMember} className="bg-purple-600 text-white px-4 py-2 text-sm rounded-lg opacity-80 hover:opacity-100 transition-opacity">Add Member</button>
                )}
            </div>

            {/* Team Member List */}
            <table className="w-full border">
                <thead>
                <tr>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Skills</th>
                    <th className="border p-2">Experience</th>
                    <th className="border p-2">Image</th>
                    <th className="border p-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {teamMembers.map((member) => (
                    <tr key={member._id} className="border text-center">
                        <td className="border p-2">{member.name}</td>
                        <td className="border p-2">{member.skills}</td>
                        <td className="border p-2">{member.experience}</td>
                        <td className="border p-2 flex justify-center items-center w-full">
                            {member.img ?
                                <img src={`http://localhost:3000/file-upload/${member.img}`} alt={member.name} className="w-12 h-12 rounded-full" /> : "No Image"}
                        </td>
                        <td className="border p-2">
                            <button onClick={() => { setEditingMember(member); setMemberData(member); }} className="text-blue-500 mr-2">Edit</button>
                            <button onClick={() => handleDeleteMember(member._id)} className="text-red-500">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeamComponent;
