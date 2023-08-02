const ProfileInfo = ({ profile, setShowEditProfile }) => {
    const rolesLength = profile ? profile.roles.length : null;
    const projectsLength = profile ? profile.projects.length : null;
    const skillsLength = profile ? profile.skills.length : null;
    const startDate = profile.startDate.slice(0, -14)
    const endDate = profile.endDate.slice(0, -14)


    return (
        <div className="xl:mt-5 container mx-auto bg-white xl:shadow xl:border-b-0 border-b-2 border-slate-100 xl:rounded">
            <div className="h-20 bg-gradient-to-r from-[#FDDAD8] to-[#F4F1BB]"></div>
            <div className="relative">
                <img className="h-28 absolute left-4 -top-14 rounded-full border-white border-4" src={profile.avatarURL ? profile.avatarURL : "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-111_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8ce2cd03f94f2baddcb332cfb50f78b9"} alt="" />
                <div className="pt-14 p-6">
                    <h1 className="text-2xl font-semibold mb-1">{profile.name}</h1>
                    <div className="flex items-center space-x-1">
                        <img className="w-5 h-5" src={require('./images/VerseLogoAsset.png')} alt="" />
                        <div>
                            {profile.roles.map((role, index) => {
                                return <span key={role}>{role}{index !== rolesLength - 1 ? ' • ' : null}</span>
                            })}
                        </div>
                    </div>
                    <div className="flex items-center space-x-1">
                        <img className="w-5 h-5" src={require('./images/clock.png')} alt="" />
                        <div>{profile.weeklyHours}hrs/week • {startDate} to {endDate}</div>
                    </div>

                    <div className="flex items-center space-x-1">
                        <img className="w-5 h-5" src={require('./images/miroLogo.png')} alt="" />
                        <div>{profile.miro}</div>
                    </div>

                    {profile.github && profile.github.trim() !== "" && (
                        <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline">
                            <div className="flex items-center space-x-1">
                                <img className="w-5 h-5" src={require('./images/githubLogo.png')} alt="" />
                                <div>{test}</div>
                            </div>
                        </a>
                    )}
                    {/*<div className="text-sm text-gray-600">*/}
                    {/*    {profile.skills.map((skill, index) => {*/}
                    {/*        return <span key={skill}>{skill}{index !== skillsLength - 1 ? ' • ' : null}</span>*/}
                    {/*    })}*/}
                    {/*</div>*/}

                    <div className="border-y-4 pt-1 pb-4 mt-1 mb-2 text-sm">
                        <h1 className="text-lg font-semibold mb-3">Skills</h1>
                        {profile.skills.map((skill, index) => {
                            return <span key={skill} className="border rounded-xl p-2 mr-1">{skill}</span>
                        })}
                    </div>

                    <div>
                        {profile.selfProfile ? <button onClick={() => {setShowEditProfile(true)}} className="bg-blue-600 hover:bg-blue-500 rounded-xl p-2 text-white font-semibold">Edit profile</button> : null}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo