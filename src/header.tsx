import { githubAvatarUrl } from "./consts";
import Avatar from "./avatar";

type HeaderProps = {
  fullname: string;
  bio: string;
};

function Header({fullname, bio}:HeaderProps) {
  return (
    <div className={`flex`}>
      <div className="flex items-center mx-auto gap-5 pt-4">
        <Avatar src={githubAvatarUrl} />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{fullname}</h1>
          <span className="font-normal text-lg text-zinc-400">
            {bio}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
