import { Users, BookOpen, User } from "lucide-react";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* Avatar */}
        <img
          src={profile.avatarUrl}
          alt={profile.username}
          className="w-36 h-36 rounded-full border-4 border-blue-500 object-cover"
        />

        {/* Details */}
        <div className="flex-1">

          <h2 className="text-3xl font-bold text-white">
            {profile.name || "GitHub User"}
          </h2>

          <p className="text-blue-400 text-lg mt-1">
            @{profile.username}
          </p>

          {profile.bio ? (
            <p className="text-slate-300 mt-4 leading-7">
              {profile.bio}
            </p>
          ) : (
            <p className="text-slate-500 mt-4 italic">
              No bio available.
            </p>
          )}

          {/* Stats */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

            <div className="bg-slate-800 rounded-xl p-5 text-center">

              <BookOpen
                className="mx-auto mb-3 text-blue-400"
                size={28}
              />

              <h3 className="text-3xl font-bold">
                {profile.publicRepos}
              </h3>

              <p className="text-slate-400 mt-1">
                Repositories
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-5 text-center">

              <Users
                className="mx-auto mb-3 text-green-400"
                size={28}
              />

              <h3 className="text-3xl font-bold">
                {profile.followers}
              </h3>

              <p className="text-slate-400 mt-1">
                Followers
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-5 text-center">

              <User
                className="mx-auto mb-3 text-pink-400"
                size={28}
              />

              <h3 className="text-3xl font-bold">
                {profile.following}
              </h3>

              <p className="text-slate-400 mt-1">
                Following
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;