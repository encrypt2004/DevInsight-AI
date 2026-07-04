import {
  MapPin,
  Building2,
  Globe,
  Users,
  BookOpen,
  Calendar,
} from "lucide-react";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">

      <div className="flex flex-col md:flex-row gap-6">

        {/* Avatar */}

        <img
          src={profile.avatar_url}
          alt={profile.login}
          className="w-36 h-36 rounded-full border-4 border-blue-500 object-cover"
        />

        {/* Information */}

        <div className="flex-1">

          <h2 className="text-3xl font-bold text-white">
            {profile.name || profile.login}
          </h2>

          <p className="text-blue-400 mt-1">
            @{profile.login}
          </p>

          {profile.bio && (
            <p className="mt-4 text-slate-300">
              {profile.bio}
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-4 mt-6">

            {profile.company && (
              <div className="flex items-center gap-2 text-slate-400">
                <Building2 size={18} />
                {profile.company}
              </div>
            )}

            {profile.location && (
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={18} />
                {profile.location}
              </div>
            )}

            {profile.blog && (
              <div className="flex items-center gap-2 text-slate-400 truncate">
                <Globe size={18} />
                <a
                  href={profile.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400"
                >
                  {profile.blog}
                </a>
              </div>
            )}

            <div className="flex items-center gap-2 text-slate-400">
              <Calendar size={18} />
              Joined{" "}
              {new Date(profile.created_at).toLocaleDateString()}
            </div>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-4 mt-8">

            <div className="bg-slate-800 rounded-xl p-4 text-center">

              <BookOpen className="mx-auto mb-2 text-blue-400" />

              <p className="text-2xl font-bold">
                {profile.public_repos}
              </p>

              <p className="text-sm text-slate-400">
                Repositories
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-4 text-center">

              <Users className="mx-auto mb-2 text-green-400" />

              <p className="text-2xl font-bold">
                {profile.followers}
              </p>

              <p className="text-sm text-slate-400">
                Followers
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-4 text-center">

              <Users className="mx-auto mb-2 text-pink-400" />

              <p className="text-2xl font-bold">
                {profile.following}
              </p>

              <p className="text-sm text-slate-400">
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