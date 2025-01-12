export default function User({ user }) {
  const { avatar_url, followers, following, public_repos, url, login } = user;
  console.log("tesing somting, ", user);

  return (
    <>
      <div className="user">
        <div className="flex justify-self-center gap-6 my-5">
          <img
            className="avater w-[10rem] h-[10rem] rounded-full"
            src={avatar_url}
            alt="user"
          />
        </div>
        <div className="flex justify-self-center font-sans text-2xl">
          <a href={`https://github.com/${login}`}>{name || login}</a>
        </div>
      </div>
    </>
  );
}
