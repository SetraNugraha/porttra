export const DemoAccount = ({ account }) => {
  if (!account) return null;

  return (
    <div className="text-slate-300">
      <h1 className="text-white">{account.isAdmin ? "Admin" : "Customer"}</h1>
      <div className="grid grid-cols-[70px_10px_auto]">
        <p>Email</p>
        <p>:</p>
        <p>{account.email}</p>
      </div>

      <div className="grid grid-cols-[70px_10px_auto]">
        <p>Password</p>
        <p>:</p>
        <p>{account.password}</p>
      </div>
    </div>
  );
};
