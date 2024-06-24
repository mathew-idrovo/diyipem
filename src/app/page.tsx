import { connectDB } from "./libs/mongodb"
import user from "./models/user"

async function loadUsers() {
  await connectDB()
  const users = await user.find()
  return users
}


async function HomePgae(){
const users= await loadUsers()
console.log(users)


  return(
    <div>
      <h1>users</h1>
      <pre>{JSON.stringify(users,null,2)}</pre>
    </div>
  )
}

export default HomePgae