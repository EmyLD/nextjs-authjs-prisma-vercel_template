import { auth } from "@/src/lib/auth";
import { AuthButton, Logout } from "./Authbutton";

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <h1>{session?.user ? "Auth :" + session.user.email : "Not"}</h1>
      <div>{session?.user ? <Logout /> : <AuthButton />}</div>
    </main>
  );
}
